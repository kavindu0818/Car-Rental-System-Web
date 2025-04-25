import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/cus", // Ensure the correct backend API
});

// ✅ Save Customer
export const saveCustomer = createAsyncThunk(
    "customers/saveCustomer",
    async (customer, { rejectWithValue }) => {

        console.log("car web customer",customer);
        try {
            const response = await api.post("/add", customer);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Error saving customer");
        }
    }
);

// ✅ Redux Slice
const customersSlice = createSlice({
    name: "customers",
    initialState: {
        customers: [],
        loading: false,
        error: null,
    },
    reducers: {}, // No need for extra reducers since we handle async actions separately
    extraReducers: (builder) => {
        builder
            // ✅ Save Customer
            .addCase(saveCustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.customers.push(action.payload);
            })
            .addCase(saveCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default customersSlice.reducer;

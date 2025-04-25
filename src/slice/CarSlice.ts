import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/car",
});

export const getCars = createAsyncThunk(
    "cars/getCars",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/");
            console.log("Fetched car data:", response.data);

            // Adjust this depending on backend structure
            return Array.isArray(response.data) ? response.data : response.data.data || [];
        } catch (err: any) {
            return rejectWithValue(err.response?.data || "Error fetching cars");
        }
    }
);

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [] as any[],
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(getCars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default carsSlice.reducer;

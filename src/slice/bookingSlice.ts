import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Axios instance for API calls
const api = axios.create({
    baseURL: 'http://localhost:8080/api/online', // Adjust endpoint as needed
});

// Async thunk to add a booking
export const addBooking = createAsyncThunk(
    'bookings/saveBooking',
    async (booking, { rejectWithValue }) => {
        try {
            console.log('Booking data in slice:', booking);
            const response = await api.post("/add", booking);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || 'Error saving booking');
        }
    }
);

// Async thunk to fetch all bookings
export const getBookings = createAsyncThunk(
    'bookings/getBookings',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/');
            console.log('Fetched bookings:', response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || 'Error fetching bookings');
        }
    }
);

// Initial state
const initialState = {
    bookings: [],
    loading: false,
    error: null,
};

// Booking slice
const bookingSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add Booking
            .addCase(addBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.push(action.payload);
            })
            .addCase(addBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Bookings
            .addCase(getBookings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(getBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default bookingSlice.reducer;

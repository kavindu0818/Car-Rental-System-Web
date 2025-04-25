import { configureStore } from "@reduxjs/toolkit";
import carsSlice from '../slice/CarSlice';
import customersSlice from "../slice/customersSlice";
import bookingSlice from "../slice/bookingSlice.ts";
// import bookingSlice from "../slice/bookingSlice";


export const store = configureStore({
    reducer: {
        cars: carsSlice,
        customers: customersSlice,
        booking: bookingSlice,
        // bookings: bookingSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

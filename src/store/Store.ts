import { configureStore } from "@reduxjs/toolkit";
import carsSlice from '../slice/CarSlice';
import customersSlice from "../slice/customersSlice";
import bookingSlice from "../slice/bookingSlice.ts";
import UserSlice from "../slice/UserSlice.ts";
// import bookingSlice from "../slice/bookingSlice";


export const store = configureStore({
    reducer: {
        cars: carsSlice,
        customers: customersSlice,
        booking: bookingSlice,
        user: UserSlice
        // bookings: bookingSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

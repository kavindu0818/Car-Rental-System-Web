import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
    jwt_token: null,
    refresh_token: null,
    username: null,
    userInfo: null, // <-- added this!
    isAuthenticated: false,
    loading: false,
    error: '',
};

// Axios instance
const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
});

// ** Async Thunks **

// Save user (Sign-up)
export const saveUser = createAsyncThunk(
    "user/saveUser",
    async (user: any, { rejectWithValue }) => {
        try {
            const response = await api.post("/users/save", user);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Error saving user");
        }
    }
);

// Get user by username
export const getUser = createAsyncThunk(
    "user/getUser",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await api.get(`/get/${id}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Error fetching user");
        }
    }
);

// Login user
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials: any, { rejectWithValue }) => {
        try {
            const response = await api.post("/users/login", credentials);
            localStorage.setItem('authToken', response.data.token); // depends if you actually get a "token" field
            console.log("Token received:", response.data);
            return response.data;
        } catch (error: any) {
            if (error.response?.status === 403) {
                return rejectWithValue("CORS issue or invalid credentials");
            }
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

// ** User Slice **
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('authToken');
            state.isAuthenticated = false;
            state.userInfo = null;
            state.jwt_token = null;
            state.refresh_token = null;
            state.username = null;
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // saveUser
            .addCase(saveUser.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(saveUser.fulfilled, (state, action) => {
                state.loading = false;
                // You may only want to set `userInfo`, not tokens, unless your API sends tokens after sign-up
                state.userInfo = action.payload;
            })
            .addCase(saveUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // loginUser
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = '';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.jwt_token = action.payload.accessToken;
                state.refresh_token = action.payload.refreshToken;
                state.username = action.payload.username;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload as string;
            })

            // getUser
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// Export actions
export const { logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;

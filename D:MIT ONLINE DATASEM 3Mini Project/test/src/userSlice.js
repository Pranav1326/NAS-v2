import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state) => {
            state.user = "userLoggedIn";
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export const userState = state => state.user.user;

export default userSlice.reducer;
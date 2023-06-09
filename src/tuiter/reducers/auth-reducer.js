import {createSlice} from "@reduxjs/toolkit";
import {logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/auth-thunks";

const initialState = {
    currentUser:null
}

const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers: {},
    extraReducers: {
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});
export default authSlice.reducer;

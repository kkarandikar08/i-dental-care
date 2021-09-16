import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    auth: {
        username: "",
        password: ""
    },
    isAuthenticated: false,
    isError: false,
    isLoading: false
};

const authSlice = createSlice({
    initialState: initialState,
    name: 'auth-slice',
    reducers: {
        login: (state: any) => {
            state.isLoading = true;
        },
        loginSuccess:(state, payload) => {
            console.log(payload);
            state.isLoading = false;
            state.isAuthenticated = true;
            localStorage.setItem('userAuthenticated', JSON.stringify(payload.payload));
        },
        loginFailure(state) {
            state.isLoading = false;
            state.isError = true;
        },
    }
});

export const { login, loginSuccess, loginFailure } = authSlice.actions;

export const loginUser = (values: any) => {
    return async (dispatch) => {
        dispatch(login());
        try {
            const response = await axios.post(`http://localhost:3001/api/login`, values);
            const data = response.data;
            console.log(data);
            await dispatch(loginSuccess(data));
        } catch (error) {
            console.log('Login Error', error);
            dispatch(loginFailure())
        }
    }
}

export default authSlice;

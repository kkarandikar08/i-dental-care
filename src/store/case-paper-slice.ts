import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
import {Patient} from "../models/Patient";


const initialState: any = {
    patient: {
        address: "",
        city: "",
        firstName: "",
        houseNumber: "",
        lastName: "",
        medicalHistory: "",
        medications: "",
        phone: "",
        state: "",
        zipCode: ""
    },
    isLoading: false,
    isError: false
};

const createCasePaperSlice = createSlice({
    initialState: initialState,
    name: 'create-case-paper',
    reducers: {
        createCasePaper(state) {
            state.isLoading = true;
            console.log('logging state', state);
        },
        createCasePaperSuccess(state, payload) {
            state.isLoading = false;
            console.log(state, payload);
            console.log('success', payload);
        },
        createCasePaperFailure(state) {
            state.isLoading = false;
            state.isError = true;
            console.log(state);
        },
    }
});

export const createNewCasePaper = (patient: Patient) => {
    console.log('Inside create case paper');
    return async dispatch => {
        dispatch(createCasePaper());
        try {
            console.log('inside try');
            const response = await axios.post(`http://localhost:5000/create-case-paper`, patient);
            console.log('response');
            const data = response.data;
            console.log('consoling data', data);
            dispatch(createCasePaperSuccess(data));

        } catch (error) {
            console.log('Create Case paper failure');
            dispatch(createCasePaperFailure())
        }
    }
}

export const { createCasePaper, createCasePaperSuccess, createCasePaperFailure } = createCasePaperSlice.actions;

export default createCasePaperSlice;

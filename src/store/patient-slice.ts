import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";


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

const patientSlice = createSlice({
    initialState: initialState,
    name: 'products',
    reducers: {
        getPatients(state) {
            state.isLoading = true;
            console.log('logging state', state);
        },
        getPatientsSuccess(state, payload) {
            state.isLoading = false;
            console.log(state, payload);
            console.log('success', payload);
        },
        getPatientsFailure(state) {
            state.isLoading = false;
            state.isError = true;
            console.log(state);
        },
    }
});

export const fetchPatients = () => {
    console.log('Inside fetch patients');
    return async dispatch => {
        dispatch(getPatients());
        try {
            console.log('inside try');
            const response = await axios.get(`http://localhost:5000/patients`);
            console.log('response');
            const data = response.data;
            console.log('consoling data', data);
            dispatch(getPatientsSuccess(data));

        } catch (error) {
            console.log('here');
            dispatch(getPatientsFailure())
        }
    }
}

export const { getPatients, getPatientsSuccess, getPatientsFailure } = patientSlice.actions;

export default patientSlice;

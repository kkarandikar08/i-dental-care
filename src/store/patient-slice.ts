import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
import {Patient} from "../models/Patient";


const initialState: any = {
    patients: [],
    selectedPatient: null,
    isLoading: false,
    isError: false
};

const patientSlice = createSlice({
    initialState: initialState,
    name: 'patient-slice',
    reducers: {
        getPatients(state) {
            state.isLoading = true;
        },
        getPatientsSuccess(state: any, payload: any) {
            state.isLoading = false;
            state.patients = [];
            payload.payload.forEach((p: Patient) => {
                state.patients.push(p)
            })
        },
        getPatientsFailure(state) {
            state.isLoading = false;
            state.isError = true;
            console.log('In error');
        },
        selectPatient(state, payload) {
            state.selectedPatient = payload.payload
        }
    }
});

export const fetchPatients = (value: string) => {

    return async dispatch => {
        dispatch(getPatients());
        try {
            const response = await axios.get(`http://localhost:5000/patients`, {params: {value: value}});
            const data = response.data;
            dispatch(getPatientsSuccess(data));

        } catch (error) {
            dispatch(getPatientsFailure())
        }
    }
}

export const fetchSelectedPatient = (value: Patient) => {
    return async dispatch => {
        dispatch(selectPatient(value))
    }
}

export const { getPatients, getPatientsSuccess, getPatientsFailure, selectPatient } = patientSlice.actions;

export default patientSlice;

import axios from "axios";
import { v4 as uuid4 } from 'uuid';

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
    isError: false,
    savedSuccessfully: false
};

const createCasePaperSlice = createSlice({
    initialState: initialState,
    name: 'create-case-paper-slice',
    reducers: {
        createCasePaper: (state: any) => {
            state.isLoading = true;
        },
        createCasePaperSuccess:(state, payload) => {
            state.isLoading = false;
            state.savedSuccessfully = true;
        },
        createCasePaperFailure(state) {
            console.log(state);
            state.isLoading = true;
            state.isError = true;
        },
    }
});

export const { createCasePaper, createCasePaperSuccess, createCasePaperFailure } = createCasePaperSlice.actions;


export const createNewCasePaper = (patient: Patient) => {
    return async (dispatch) => {
        dispatch(createCasePaper());
        try {
            patient._id = uuid4();
            const response = await axios.post(`http://localhost:5000/create-case-paper`, patient);
            const data = response.data;
             await dispatch(createCasePaperSuccess(data));
        } catch (error) {
            console.log('Create Case paper failure');
            dispatch(createCasePaperFailure())
        }
    }
}

export default createCasePaperSlice;

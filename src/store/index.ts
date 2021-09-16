import { createStore, combineReducers } from "@reduxjs/toolkit";
import patientSlice from "./slices/patient-slice";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import createCasePaperSlice from "./slices/case-paper-slice";
import authSlice from "./slices/auth-slice";

const rootReducer = combineReducers({
    patientSlice: patientSlice.reducer,
    createCasePaperSlice: createCasePaperSlice.reducer,
    authSlice: authSlice.reducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

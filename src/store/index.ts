import { createStore, combineReducers } from "@reduxjs/toolkit";
import patientSlice from "./patient-slice";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import createCasePaperSlice from "./case-paper-slice";

const rootReducer = combineReducers({
    patientSlice: patientSlice.reducer,
    createCasePaperSlice: createCasePaperSlice.reducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
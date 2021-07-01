import { createStore, combineReducers } from "@reduxjs/toolkit";
import patientSlice from "./patient-slice";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    patient: patientSlice.reducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
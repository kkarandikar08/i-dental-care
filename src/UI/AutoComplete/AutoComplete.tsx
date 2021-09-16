import React, {BaseSyntheticEvent} from "react";
import Autocomplete, {createFilterOptions} from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {Box, InputAdornment} from "@material-ui/core";
import {Search} from "@material-ui/icons";

import _ from 'lodash';

import classes from "./AutoComplete.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchPatients, fetchSelectedPatient} from "../../store/slices/patient-slice";
import {Patient} from "../../models/Patient";

const AutoComplete = (props: any) => {

    const filterOptions = createFilterOptions({
        stringify: ({ firstName, lastName, phone }) => `${firstName} ${lastName} ${phone}`
    });

    const dispatch = useDispatch();
    const patientState = useSelector((state: any) => state.patientSlice.patients);
    console.log(patientState);

    const search = (input: BaseSyntheticEvent) => {
        const debouncedInput = typeof input.target.value === "number" ? input.target.value : input.target.value.trim();
        if(debouncedInput.length) {
            // fetch patient data
            dispatch(fetchPatients(debouncedInput));
        }
    };

    const selectPatient = (patient: Patient) => {
        dispatch(fetchSelectedPatient(patient))
    }

    return(
        <Box className={classes.search}>
            <Autocomplete
                className={classes.autocomplete}
                freeSolo
                id="Autocomplete"
                onInputChange={_.debounce((input: any) => {search(input)}, 1000)}

                disableClearable
                noOptionsText={'No such patient with the values provided'}
                options={props.data}
                filterOptions={filterOptions}
                getOptionLabel={(option: any) => {
                    return `${option.firstName} ${option.lastName}`
                }}
                onChange={(event, value) => selectPatient(value)}
                renderInput={(params) => (
                    <TextField
                        className={classes.searchText}
                        {...params}
                        label="Search Patient"
                        margin="normal"
                        color={"primary"}
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', startAdornment:(
                                <InputAdornment position={"start"}>
                                    <Search/>
                                </InputAdornment>
                            )}}
                    />
                )}
            />
        </Box>
    )
};

export default AutoComplete;

import React, {useEffect} from "react";
import {useSelector} from "react-redux";

import { Box, Divider, Grid } from '@material-ui/core';

import {Patient} from "../../../models/Patient";

import AutoComplete from "../../../UI/AutoComplete/AutoComplete";
import AppointmentSchedule from "./AppointmentSchedule/AppointmentSchedule";
import Documents from "./Documents/Documents";
import Dues from "./Dues/Dues";
import Notes from "./Notes/Notes";
import PersonalInformationHeader from "./PersonalInformation/PersonalInformationHeader/PersonalInformationHeader";
import PersonalInformationHeaderSkeleton from "../../../UI/Skeletons/PersonalInformationHeaderSkeleton/PersonalInformationHeaderSkeleton";
import PersonalInformationDetail from "./PersonalInformation/PersonalInformationDetail/PersonalInformationDetail";

import classes from './PatientDetail.module.css';

const PatientDetail = () => {
    const patients = useSelector((state: any) => state.patientSlice.patients);
    const selectedPatient: Patient = useSelector((state: any) => state.patientSlice.selectedPatient);
    useEffect(() => {}, [patients]);

    return (
        <Box className={classes.root}>
            <AutoComplete data={patients}/>
            <Divider/>
            {
                selectedPatient === null ? <PersonalInformationHeaderSkeleton/> : <PersonalInformationHeader title={`${selectedPatient?.firstName} ${selectedPatient?.lastName}`}/>
            }
            <Divider/>
            <div className={classes.detailContainer}>
                <Grid container spacing={4}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <PersonalInformationDetail patient={selectedPatient}/>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <AppointmentSchedule/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Documents/>
                    </Grid>
                    <Grid item lg={8} md={4} sm={12} xs={12}>
                        <Notes/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Dues/>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}

export default PatientDetail;
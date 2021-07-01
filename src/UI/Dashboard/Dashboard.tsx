import React from "react";
import { Grid } from "@material-ui/core";

import PatientsCard from "./Patients/PatientsCard";
import PatientAttendanceCard from "./PatientAttendance/PatientAttendanceCard";
import PatientsTreatedCard from "./PatientTreated/PatientsTreatedCard";
import RevenueCard from "./Revenue/RevenueCard";

const Dashboard = () => {

    return(
        <Grid container spacing={4}>
            <Grid item lg={12} md={6} xs={12} sm={12}>
                <PatientAttendanceCard/>
            </Grid>
            <Grid item lg={12} md={6} xs={12} sm={12}>
                <PatientsCard/>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <PatientsTreatedCard/>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <RevenueCard/>
            </Grid>
        </Grid>
    )
};

export default Dashboard;
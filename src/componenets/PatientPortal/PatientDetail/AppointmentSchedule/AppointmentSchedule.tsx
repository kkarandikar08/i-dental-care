import React from "react";
import {Card, Grid} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {DataGrid} from "@material-ui/data-grid";

import classes from './AppointmentSchedule.module.css';
import {useSelector} from "react-redux";

const rows = [
    { id: 1, nextAppointment: '9 August 2021 12pm', lastName: 'Karandikar', firstName: 'Kaushik', dentist: 'Palavi Karandikar', type: 'Root Canal' },
];

const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nextAppointment', headerName: 'Next Appointment', width: 300 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150,  },
    { field: 'type', headerName: 'Treatment', width: 150,  },
];

const AppointmentSchedule = () => {

    const patients = useSelector((state: any) => state.patients);

    console.log(patients);
    return (
            <Card className={classes.appointments}>
                <ButtonGroup disableElevation className={classes.appointments__buttonGroup} variant="contained" color="primary">
                    <Button>
                        PAST APPOINTMENTS
                    </Button>
                    <Button>
                        UPCOMING APPOINTMENTS
                    </Button>
                </ButtonGroup>
                <div className={classes.table}>
                    <DataGrid rows={rows} columns={columns} pageSize={5}/>
                </div>
            </Card>
    )
};

export default AppointmentSchedule;
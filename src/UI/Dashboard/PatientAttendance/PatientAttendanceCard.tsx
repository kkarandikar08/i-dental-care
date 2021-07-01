import React from "react";
import { Card, CardContent, CardHeader, Paper } from "@material-ui/core";
import { ArgumentAxis, BarSeries, Chart, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Animation, Stack } from "@devexpress/dx-react-chart";

import classes from './PatientAttendanceCard.module.css';

const data = [
    { month: 'May', attended: 20, canceled: 10 },
    { month: 'June', attended: 40, canceled: 6 },
    { month: 'July', attended: 50, canceled: 0 },
];


const PatientAttendanceCard = () => {
    return (
        <Card className={classes.root}>
            <CardHeader
                title="Patient Attendance"
            />
            <CardContent>
                <Paper>
                    <Chart
                        data={data}
                    >
                        <ArgumentAxis />
                        <ValueAxis />

                        <BarSeries
                            name="Attended"
                            valueField="attended"
                            argumentField="month"
                            color="#4698f4"
                        />
                        <BarSeries
                            name="Attended"
                            valueField="canceled"
                            argumentField="month"
                            color="#da738f"
                        />
                        <Animation/>
                        <Stack/>
                    </Chart>
                </Paper>
            </CardContent>
        </Card>
    )
};

export default PatientAttendanceCard;
import React from "react";
import { Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";

import classes from './PatientsTreatedCard.module.css';

const PatientsTreatedCard = () => {
    return (
        <Card className={classes.root}>
            <CardHeader
                title="PATIENTS TREATED"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography paragraph variant="h6" component="span">
                    THIS MONTH
                </Typography>
                <br/>
                <Typography variant="h4" component="span">
                    67
                </Typography>
                <br/>
                <br/>
                <Divider/>
                <br/>
                <Typography paragraph variant="h6" component="span">
                    LAST MONTH
                </Typography>
                <br/>
                <Typography variant="h4" component="span">
                    79
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PatientsTreatedCard;
import React from "react";
import { Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";

import classes from './RevenueCard.module.css';

const RevenueCard = () => {
    return (
        <Card className={classes.root}>
            <CardHeader
                // avatar={
                //     <Avatar aria-label="recipe" className={classes.avatar}>
                //         R
                //     </Avatar>
                // }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Revenue"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography paragraph variant="h6" component="span">
                    Total Revenue expected
                </Typography>
                <br/>
                <Typography variant="h4" component="span">
                    Rs 5,00,000
                </Typography>
                <br/>
                <br/>
                <Divider/>
                <br/>
                <Typography paragraph variant="h6" component="span">
                    Total Revenue collected
                </Typography>
                <br/>
                <Typography variant="h4" component="span">
                    Rs 3,00,000
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RevenueCard;
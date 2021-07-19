import React from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";

const Dues = () => {
    return (
        <Card>
            <CardHeader title={"TOTAL DUES"}/>
            <CardContent>
                <Typography variant={"h5"}>Rs.80,000</Typography>
            </CardContent>
        </Card>
    )
}

export default Dues;
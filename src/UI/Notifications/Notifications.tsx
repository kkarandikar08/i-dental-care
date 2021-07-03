import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const Notifications = (props) => {

    const handleClose = (event?: React.SyntheticEvent) => {
        setOpen(false);
    }

    const casePaperState = useSelector((state: any) => state.createCasePaperSlice);
    const [open, setOpen] = useState(false);
    return (
        <Snackbar>
            <Alert onClick={handleClose} elevation={6} variant={"filled"} severity={props.severity}>
                {props.title}
            </Alert>
        </Snackbar>
    )
};

export default Notifications;
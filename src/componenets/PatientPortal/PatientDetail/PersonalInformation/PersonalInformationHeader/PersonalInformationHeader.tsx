import React from "react";
import {Tooltip, Typography} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {Edit, Print} from "@material-ui/icons";

import classes from "./PersonalInformationHeader.module.css";

const PersonalInformationHeader = (props) => {
    return (
        <div className={classes.options}>
            <Typography variant={"h6"} component={"span"}>{props.title}</Typography>
            <ButtonGroup variant="contained" color="primary"  aria-label="large outlined primary button group">
                <Tooltip title={"Print"}>
                    <Button startIcon={<Print/>}/>
                </Tooltip>
                <Tooltip title={"Edit Patient Information"}>
                    <Button startIcon={<Edit/>}/>
                </Tooltip>
            </ButtonGroup>
        </div>
    )
};

export default PersonalInformationHeader;
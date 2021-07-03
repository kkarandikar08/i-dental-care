import React from "react";
import classes from './PersonalInformationHeaderSkeleton.module.css';
import {Skeleton} from "@material-ui/lab";

const PersonalInformationHeaderSkeleton = () => {
    return (
            <Skeleton variant={"text"} className={classes.options}/>
    )
}

export default PersonalInformationHeaderSkeleton;
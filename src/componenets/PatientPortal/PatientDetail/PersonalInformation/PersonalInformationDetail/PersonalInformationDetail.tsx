import React from "react";
import {Box, Card, Divider, Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import classes from './PersonalInformationDetail.module.css';


const PersonalInformationDetail = (props: any) => {
    return (
        <div className={classes.root}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className={classes.personalInformation}>
                            <Avatar aria-label="recipe" className={classes.personalInformation__avatar}>
                                {`${props?.patient?.firstName.charAt(0)}`}
                            </Avatar>
                            <div className={classes.personalInformation__name}>{`${props?.patient?.firstName} ${props?.patient?.lastName}`}</div>
                            <div className={classes.personalInformation__phone}>{`${props?.patient?.phone}`}</div>
                            <div>
                                <Box className={classes.personalInformation__container}>
                                    <div className={classes.block}>
                                        <span className={classes.personalInformation__appointments}>15</span>
                                        <br/>
                                        <span className={classes.personalInformation__appointments_container__block__caption}>PAST</span>
                                    </div>
                                    <Divider className={classes.personalInformation__appointments__divider} orientation={"vertical"} flexItem={true} component={"hr"}/>
                                    <div className={classes.block}>
                                        <span className={classes.personalInformation__appointments}>5</span>
                                        <br/>
                                        <span className={classes.personalInformation__appointments_container__block__caption}>NEW</span>
                                    </div>
                                </Box>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Card className={classes.personalInformation}>
                            <div className={classes.personalInformation__container}>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Gender</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{props?.patient?.gender}</span>
                                </div>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Birthday</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{props?.patient?.dateOfBirth}</span>
                                </div>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Phone Number</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{props?.patient?.phone}</span>
                                </div>
                            </div>
                            <Divider/>
                            <div className={classes.personalInformation__container}>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Address</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{`${props?.patient?.address} ${props?.patient?.houseNumber}`}</span>
                                </div>
                            </div>
                            <Divider/>
                            <div className={classes.personalInformation__container}>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>City</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{props?.patient?.city}</span>
                                </div>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Zip Code</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>{props?.patient?.zipCode}</span>
                                </div>
                                <div className={classes.block}>
                                    <label className={classes.personalInformation__detail__label}>Registered Date</label>
                                    <br/>
                                    <span className={classes.personalInformation__detail__span}>08/07/1992</span>
                                </div>
                            </div>

                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default PersonalInformationDetail;
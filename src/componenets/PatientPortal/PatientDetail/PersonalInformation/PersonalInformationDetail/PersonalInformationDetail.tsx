import React from "react";
import {Box, Card, Divider, Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import classes from './PersonalInformationDetail.module.css';
import {Patient} from "../../../../../models/Patient";


const PersonalInformationDetail = (props: Patient) => {
    return (
        <Grid item lg={12} md={8} sm={12} xs={12}>
            <Grid container spacing={1}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className={classes.personalInformation}>
                            <Avatar aria-label="recipe" className={classes.personalInformation__avatar}>
                                {`${props?.firstName.charAt(0)}`}
                            </Avatar>
                        <div className={classes.detail__name}>{`${props?.firstName} ${props?.lastName}`}</div>
                        <div className={classes.detail__contact}>{`${props?.phone}`}</div>
                        <div>
                            <Box className={classes.detail__appointments}>
                                <div className={classes.detail__appointments__block}>
                                    <span className={classes.detail__appointments__block__number}>15</span>
                                    <br/>
                                    <span className={classes.detail__appointments__block__caption}>PAST</span>
                                </div>
                                <Divider className={classes.detail__appointments__divider} orientation={"vertical"} flexItem={true} component={"hr"}/>
                                <div className={classes.detail__appointments__block}>
                                    <span className={classes.detail__appointments__block__number}>5</span>
                                    <br/>
                                    <span className={classes.detail__appointments__block__caption}>UPCOMING</span>
                                </div>
                            </Box>
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Card className={classes.detail}>
                        <div className={classes.detail__information}>
                            <div className={classes.detail__appointments__block}>
                                {/*    <TextField*/}
                                {/*        id="standard-read-only-input"*/}
                                {/*        label="Gender"*/}
                                {/*        defaultValue="Male"*/}
                                {/*        InputProps={{*/}
                                {/*            readOnly: true,*/}
                                {/*        }}*/}
                                {/*        variant={"outlined"}*/}
                                {/*    />*/}
                                <label className={classes.detail__information__label}>Gender</label>
                                <br/>
                                <span className={classes.detail__information__value}>Male</span>
                            </div>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>Birthday</label>
                                <br/>
                                <span className={classes.detail__information__value}>08/07/1992</span>
                            </div>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>Phone Number</label>
                                <br/>
                                <span className={classes.detail__information__value}>35353535635</span>
                            </div>
                        </div>
                        <Divider/>
                        <div className={classes.detail__information}>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>Address</label>
                                <br/>
                                <span className={classes.detail__information__value}>Dahanukar Colony, Lane 5, Kothrud</span>
                            </div>
                        </div>
                        <Divider/>
                        <div className={classes.detail__information}>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>City</label>
                                <br/>
                                <span className={classes.detail__information__value}>08/07/2020</span>
                            </div>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>Zip Code</label>
                                <br/>
                                <span className={classes.detail__information__value}>353657</span>
                            </div>
                            <div className={classes.detail__appointments__block}>
                                <label className={classes.detail__information__label}>Registered Date</label>
                                <br/>
                                <span className={classes.detail__information__value}>08/07/1992</span>
                            </div>
                        </div>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PersonalInformationDetail;
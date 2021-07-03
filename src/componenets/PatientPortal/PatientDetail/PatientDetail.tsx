import React, {useEffect} from "react";

import {
    Box,
    Divider,
    Grid,
    makeStyles,
    Typography,
    Card,
    CardHeader,
    CardContent, List, ListItemIcon, ListItemText, ListItem, Tooltip, IconButton
} from '@material-ui/core';
import {
    Add, CloudDownload, Receipt
} from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {DataGrid} from "@material-ui/data-grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AutoComplete from "../../../UI/AutoComplete/AutoComplete";
import PersonalInformationHeader from "./PersonalInformation/PersonalInformationHeader/PersonalInformationHeader";
import {useSelector} from "react-redux";
import {Patient} from "../../../models/Patient";
import PersonalInformationHeaderSkeleton from "../../../UI/Skeletons/PersonalInformationHeaderSkeleton/PersonalInformationHeaderSkeleton";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center"
    },
    // search: {
    //     width: "100%",
    //     display: "flex",
    //     flexGrow: 1,
    //     justifyContent: "flex-end"
    // },
    searchText: {
        width: 300
    },
    options: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        margin: 10
    },
    detailContainer: {
        marginTop: 10
    },
    detail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 250
    },
    avatarContainer: {
        margin: "auto"
    },
    avatarOrImage: {
        margin: "auto",
        marginTop: 15
    },
    detail__name: {
        margin: "auto",
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 15
    },
    detail__information: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 10
    },
    detail__information__label: {
        color: "#c1c1c1",
        marginBottom: 3,
        fontSize: 16
    },
    detail__information__value: {
        margin: 5,
        fontSize: 16,
        // wordWrap: "break-word"
    },
    detail__contact: {
        margin: "auto",
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 14,
        color: "darkgray"
    },
    detail__appointments: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 20,
        alignItems: "flex-start"
    },
    detail__appointments__block__number: {
        fontSize: 20,
        fontWeight: "bold"
    },
    detail__appointments__divider: {
        width: 2,
        height: 40,
        marginBottom: 20
    },
    detail__appointments__block: {
        verticalAlign: "top",
        display: "block",
        textAlign: "center"
    },
    detail__appointments__block__caption: {
        display: "block"
    },
    appointments: {
        display: "flex",
        justifyContent: "flex-start",
        // width: "100%",
        flexDirection: "column"
    },
    appointments__buttonGroup: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        width: "60%",
    },
    appointments__datagrid: {
        height: "100%"
    },
    documents: {
        display: "flex",
        justifyContent: "flex-start",
        // width: "100%",
        flexDirection: "column"
    },
    documents__header: {
        display: "flex",
        justifyContent: "space-between",
        // width: "100%",
        flexDirection: "row"
    },
    documents__header__button: {
        margin: 10
    },
    documents__header__title: {
        margin: 10
    },
    notes: {}
})

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



const PatientDetail = () => {
    const patients = useSelector((state: any) => state.patientSlice.patients);
    const selectedPatient: Patient = useSelector((state: any) => state.patientSlice.selectedPatient);
    useEffect(() => {}, [patients]);
    console.log(patients);
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AutoComplete data={patients}/>
            <Divider/>
            {
                selectedPatient === null ? <PersonalInformationHeaderSkeleton/> : <PersonalInformationHeader title={`${selectedPatient?.firstName} ${selectedPatient?.lastName}`}/>
            }
            <Divider/>
            <div className={classes.detailContainer}>
                <Grid container spacing={4}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <Grid container spacing={1}>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <Card className={classes.detail}>
                                    {/*<div className={classes.avatarContainer}>*/}
                                        <Avatar aria-label="recipe" className={classes.avatarOrImage}>
                                            {`${selectedPatient?.firstName.charAt(0)}`}
                                         </Avatar>
                                    {/*</div>*/}
                                    <div className={classes.detail__name}>{`${selectedPatient?.firstName} ${selectedPatient?.lastName}`}</div>
                                    <div className={classes.detail__contact}>{`${selectedPatient?.phone}`}</div>
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
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Card className={classes.appointments}>
                            <ButtonGroup disableElevation className={classes.appointments__buttonGroup} variant="contained" color="primary">
                                <Button>
                                    PAST APPOINTMENTS
                                </Button>
                                <Button>
                                    UPCOMING APPOINTMENTS
                                </Button>
                            </ButtonGroup>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid rows={rows} columns={columns} pageSize={5}/>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className={classes.documents}>
                            <div className={classes.documents__header}>
                                <Typography className={classes.documents__header__title} variant={"h5"}>DOCUMENTS</Typography>
                                <Button className={classes.documents__header__button} color={"primary"} variant={"contained"} startIcon={<Add/>}>Add</Button>
                            </div>
                            <CardContent>
                                <List>
                                    <ListItem key="Dashboard">
                                        <ListItemIcon>
                                            <Receipt/>
                                        </ListItemIcon>
                                        <ListItemText primary={"Root Canal X-Ray"} />
                                        <ListItemIcon>
                                            <Tooltip title={"Download"}>
                                                <IconButton>
                                                    <CloudDownload color={"primary"}/>
                                                </IconButton>
                                            </Tooltip>
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem key="Dashboard List">
                                        <ListItemIcon>
                                            <Receipt/>
                                        </ListItemIcon>
                                        <ListItemText primary={"Full Mouth X-Ray"} />
                                        <ListItemIcon>
                                            <Tooltip title={"Download"}>
                                                <IconButton>
                                                    <CloudDownload color={"primary"}/>
                                                </IconButton>
                                            </Tooltip>
                                        </ListItemIcon>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={8} md={4} sm={12} xs={12}>
                        <Card className={classes.notes}>
                                <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Cannot Locate MB2"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    // className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Palavi Karandikar
                                                </Typography>
                                                {" MB2 is very difficult to locate"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Parat ekda shodh"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    // className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Anish Naware
                                                </Typography>
                                                {" Itkde tikde bagh jara sapdel"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Are ikde hota to!!!"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    // className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Palavi Karandikar
                                                </Typography>
                                                {'Sapadla sapadla!!!!!'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <CardHeader title={"TOTAL DUES"}/>
                            <CardContent>
                                <Typography variant={"h5"}>Rs.80,000</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Box>

    )
}

const top100Films = [
    // { title: 'The Shawshank Redemption', year: 1994 },
    // { title: 'The Godfather', year: 1972 },
    // { title: 'The Godfather: Part II', year: 1974 }
];

export default PatientDetail;
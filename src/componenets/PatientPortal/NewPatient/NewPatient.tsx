import React, {useEffect} from "react";
import {
    Box,
    Button,
    Card,
    Fade, Icon, InputAdornment,
    TextField,
    Typography
} from "@material-ui/core";

import classes from './NewPatient.module.css';
import { useFormik } from "formik";
import CasePaperSchema from "../../../helpers/schemas/CasePaperSchema";
import {Patient} from "../../../models/Patient";
import {House, Phone, Room} from "@material-ui/icons";
import { fetchPatients } from "../../../store/patient-slice";
import {useDispatch, useSelector} from "react-redux";
import {createNewCasePaper} from "../../../store/case-paper-slice";

const NewPatient = () => {

    const dispatch = useDispatch();
    const initialState: Patient = {
        address: "",
        city: "",
        firstName: "",
        houseNumber: "",
        lastName: "",
        medicalHistory: "",
        medications: "",
        phone: "",
        state: "",
        zipCode: ""
    };
    const formik = useFormik<Patient>({
        initialValues: initialState,
        validationSchema: CasePaperSchema,
        onSubmit: (async (values, formikHelpers) => {
            console.log('Calling Create Case Paper API');
            dispatch(createNewCasePaper(values));
            formikHelpers.resetForm()
        })
    });


    return(
        <Fade in={true} timeout={1000}>
            <Box className={classes.container}>
                <Card elevation={8} className={classes.root}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h4" className={classes.title}>CASE PAPER</Typography>
                    </Box>
                    <form onSubmit={formik.handleSubmit}>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"firstName"}
                                className={classes.name}
                                variant="outlined"
                                label="First Name"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                            <TextField
                                id={"lastName"}
                                className={classes.name}
                                variant="outlined"
                                label="Last Name"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}

                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"address"}
                                className={classes.address}
                                variant="outlined"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                                label="Address"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <Icon>
                                                <Room/>
                                            </Icon>
                                        </InputAdornment>
                                }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"houseNumber"}
                                className={classes.address}
                                variant="outlined"
                                value={formik.values.houseNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.houseNumber && Boolean(formik.errors.houseNumber)}
                                helperText={formik.touched.houseNumber && formik.errors.houseNumber}
                                label="House / Flat / Apt"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <Icon>
                                                <House/>
                                            </Icon>
                                        </InputAdornment>
                                }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"city"}
                                className={classes.address}
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                                variant="outlined"
                                label="City"
                            />
                            <TextField
                                id={"state"}
                                className={classes.address}
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.state && Boolean(formik.errors.state)}
                                helperText={formik.touched.state && formik.errors.state}
                                variant="outlined"
                                label="State"
                            />
                            <TextField
                                id={"zipCode"}
                                className={classes.address}
                                variant="outlined"
                                value={formik.values.zipCode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                                helperText={formik.touched.zipCode && formik.errors.zipCode}
                                label="Zip Code"
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"phone"}
                                className={classes.phone}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                variant="outlined"
                                label="Phone Number"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <Icon>
                                                <Phone/>
                                            </Icon>
                                        </InputAdornment>
                                }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"medicalHistory"}
                                value={formik.values.medicalHistory}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.medicalHistory && Boolean(formik.errors.medicalHistory)}
                                helperText={formik.touched.medicalHistory && formik.errors.medicalHistory}
                                multiline
                                className={classes.name}
                                variant="outlined"
                                label="Medical History"
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id={"medications"}
                                value={formik.values.medications}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.medications && Boolean(formik.errors.medications)}
                                helperText={formik.touched.medications && formik.errors.medications}
                                multiline
                                className={classes.name}
                                variant="outlined"
                                label="Medication List"
                            />
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Button variant="contained" color="primary" className={classes.button} type={"submit"}>
                                CREATE CASE PAPER
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </Fade>
    )
};

export default NewPatient;
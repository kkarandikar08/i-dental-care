import React, {useEffect, useState} from 'react';
import {useHistory, Redirect} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import classes from './Authentication.module.css';
import {useFormik} from "formik";
import {Auth} from "../../models/Auth";
import {useDispatch, useSelector} from "react-redux";
import AuthenticationSchema from "../../helpers/schemas/AuthenticationSchema";
import {loginUser} from "../../store/slices/auth-slice";
import Select from "@material-ui/core/Select";
import {MenuItem} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const Authentication = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector((state: any) => state.authSlice.isAuthenticated);
    useEffect(() => {
        if(isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated]);
    console.log(isAuthenticated);
    const initialState = {
        username: '',
        password: '',
        employeeType: ''
    }

    const formik = useFormik<Auth>({
        initialValues: initialState,
        validationSchema: AuthenticationSchema,
        onSubmit: (async (values, formikHelpers) => {
            dispatch(loginUser(values))
            formikHelpers.resetForm()
        })
    });

    return (
        <Container component="main" maxWidth="xs" className={classes.main}>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id={"username"}
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        variant="outlined"
                        className={classes.textInput}
                        required
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        id={"password"}
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant={"outlined"}
                        className={classes.textInput}
                        required
                        fullWidth
                        type={"password"}
                    />
                    <FormControl variant="outlined" className={classes.select}>
                        <InputLabel id="demo-simple-select-outlined-label">Employee Type</InputLabel>
                        <Select
                            fullWidth
                            value={formik.values.employeeType}
                            onChange={formik.handleChange('employeeType')}

                            label="Employee Type"
                        >
                                <MenuItem value={'DENTIST'}>DENTIST</MenuItem>
                                <MenuItem value={'STAFF'}>STAFF</MenuItem>
                                <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        className={classes.submit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};
export default Authentication;

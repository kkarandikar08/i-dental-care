import React from 'react';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import NewPatient from "../../componenets/PatientPortal/NewPatient/NewPatient";
import PatientDetail from "../../componenets/PatientPortal/PatientDetail/PatientDetail";

const drawerWidth = 240;

const useStyles = makeStyles((theme: { zIndex: { drawer: number; }; spacing: (arg0: number) => any; }) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // width: `calc(100% - ${drawerWidth}px)`,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 100
    }
}));

const Layout =() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                cssClasses={classes}
            />
            <Sidebar
                cssClasses={classes}
            />
            <main className={classes.content}>
                <Switch>
                    <Route exact path='/'>
                        <Dashboard/>
                    </Route>
                    <Route path="/create-case-paper">
                        <NewPatient />
                    </Route>
                    <Route path="/patient-detail">
                        <PatientDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default Layout;
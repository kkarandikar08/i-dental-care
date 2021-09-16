import React from "react";
import { useHistory } from 'react-router-dom';

import { Drawer, Toolbar, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import {Dashboard, CalendarToday, MonetizationOn, Receipt, AccountCircle} from '@material-ui/icons';

const Sidebar = (props: { cssClasses: { drawer: string | undefined; drawerPaper: any; drawerContainer: string | undefined; }; }) => {

    const history = useHistory();

    const onCreateCasePaperClickHandler = () => {
        history.push('/create-case-paper');
    }
    const onDashboardClickHandler = () => {
        history.push('/dashboard');
    }
    const onPatientDetailClickHandler = () => {
        history.push('/patient-detail');
    }
    const onCalendarClickHandler = () => {
        history.push('/schedule-appointment');
    }


    return (
        <Drawer
            className={props.cssClasses.drawer}
            variant="permanent"
            classes={{
                paper: props.cssClasses.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={props.cssClasses.drawerContainer}>
                <List>
                    <ListItem button key="Dashboard" onClick={onDashboardClickHandler}>
                        <ListItemIcon>
                            <Dashboard/>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>
                    <ListItem button key="Create Case Paper" onClick={onCreateCasePaperClickHandler}>
                        <ListItemIcon>
                            <Receipt/>
                        </ListItemIcon>
                        <ListItemText primary={"Create Case Paper"} />
                    </ListItem>
                    <ListItem button key="Patient Detail" onClick={onPatientDetailClickHandler}>
                        <ListItemIcon>
                            <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText primary={"Patients Detail"} />
                    </ListItem>
                    <ListItem button key="Payment Information">
                        <ListItemIcon>
                            <MonetizationOn/>
                        </ListItemIcon>
                        <ListItemText primary={"Payment Information"} />
                    </ListItem>
                    <ListItem button key="Calendar" onClick={onCalendarClickHandler}>
                        <ListItemIcon>
                            <CalendarToday/>
                        </ListItemIcon>
                        <ListItemText primary={"Calendar"} />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
};

export default Sidebar;

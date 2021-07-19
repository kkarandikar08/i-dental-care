import React from "react";

import classes from './Notes.module.css';

import {
    Card,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const Notes = () => {
    return (
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
    )
};

export default Notes;
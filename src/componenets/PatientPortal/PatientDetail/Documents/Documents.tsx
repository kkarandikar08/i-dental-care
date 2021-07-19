import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {DataGrid} from "@material-ui/data-grid";
import {
    Card,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography
} from "@material-ui/core";

import classes from './Documents.module.css';
import {Add, CloudDownload, Receipt} from "@material-ui/icons";

const Documents = () => {
    return (
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
    )
};

export default Documents;
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const Header = (props: { cssClasses: { appBar: string | undefined; }; }) => {

    return (
        <AppBar position="fixed" elevation={0} className={props.cssClasses.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    TITLE
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import offenAppForm from '../offen_app_form.doc';
import bulkerAppForm from '../bulker_app_form.doc';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        marginTop: '-50px',
        width: '95%',
        position: "relative",
    },
    paper: {
        padding: theme.spacing(2),
    },
    textHeaderPage: {
        fontWeight: 700,
        padding: theme.spacing(3),
    },
    textBody: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    btn: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
}));

const Application = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.textHeaderPage} component="div" variant="h2" color="secondary">
                <Box textAlign="center" m={1}>
                    Application
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    Dear seaman, please, download one from enclosed applications:
                </Box>
            </Typography>
            <Button className={classes.btn} size={window.innerWidth > 450 ? "large" : "small"}
                    variant="contained"
                    color="default"
                    href={offenAppForm}
                    download="offenAppForm"
                    startIcon={<GetAppIcon/>}
            >
                CPO application form
            </Button>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    or
                </Box>
            </Typography>
            <Button className={classes.btn} size={window.innerWidth > 450 ? "large" : "small"}
                    variant="contained"
                    color="default"
                    href={bulkerAppForm}
                    download="bulkerAppForm"
                    startIcon={<GetAppIcon/>}
            >
                Bulker application form
            </Button>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    fill it and send  to:
                    <br/>
                    info@bark.com.ua
                </Box>
            </Typography>
        </Paper>
    );
}

export default Application;
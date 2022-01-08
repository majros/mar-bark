import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from "@material-ui/core/Box";

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

const Contact = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper} elevation={3} >
            <Typography className={classes.textHeaderPage} component="div" variant="h2" color="secondary">
                <Box textAlign="center" m={1}>
                    Contact
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={1}>
                    MA Bark Agency
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    27 apt. 11 Chernomorskaya str.
                    <br/>
                    Mariupol Ukraine
                    <br/>
                    Phones: +38 0629 41-36-<b>25/28</b>
                    <br/>
                    Phones: +38 0629 41-71-<b>48/49/50</b>
                    <br/>
                    e-mail: info@bark.com.ua
                </Box>
            </Typography>
            <Button className={classes.btn}
                    variant="contained"
                size="small"
                style={{backgroundColor: "#ea4c89", color: "#FFF"}}
                startIcon={<InstagramIcon />}
                target='_blank'
                href={'https://www.instagram.com/bark_agency/?hl=ru'}
            >
                instagram
            </Button>
        </Paper>
    );
}

export default Contact;
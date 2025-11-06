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
                    6 of. 14 Dyukovskaya str.
                    <br/>
                    Odessa Ukraine
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    Phones: +38 048 740-70-<b>(53) (54) (55)</b>
                    <br/>
                    +30 697 195 4418 - Mrs.Yulia
                    <br/>
                    +30 697 195 4419 - Mrs.Anna
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    Fax: +38 048 740-70-56
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    all messengers:
                    <br/>
                    +38 066 271 3222 - Mrs.Yulia
                    <br/>
                    +38 097 733 5077 - Mrs.Anna
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    e-mail: info@bark.com.ua
                    <br/>
                    e-mail: barkmarstaffgr@gmail.com
                </Box>
            </Typography>

            <Button className={classes.btn}
                    variant="contained"
                size="small"
                style={{backgroundColor: "#ea4c89", color: "#FFF"}}
                startIcon={<InstagramIcon />}
                target='_blank'
                rel="noreferrer"
                href={'https://www.instagram.com/bark_agency/?hl=ru'}
            >
                instagram
            </Button>
        </Paper>
    );
}

export default Contact;
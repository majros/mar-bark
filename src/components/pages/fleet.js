import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';

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
}));

const Fleet = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper} elevation={3} >
            <Typography className={classes.textHeaderPage} component="div" variant="h2" color="secondary">
                <Box textAlign="center" m={1}>
                        Fleet
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={1}>
                        <b>Bark agency</b> cooperates with various ship Owners, who representing
                        container, bulk and tanker shipping market segments.
                    <br/>
                    Our major Principals are:
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h6" color="textSecondary" >
                <Box fontFamily="Roboto" textAlign="left" fontWeight="fontWeightBold" m={1}>
                        - Offen Group, Hamburg, Germany
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                        The Offen Group has a long and proud history stretching from the foundation of RCPO in 1971 to the current
                        day where it has grown to become one of the world's leading managers of container shipping.
                        <br/>
                        It has some 40 container vessels in service or currently under construction; most of them are chartered
                        under long-term contract to leading shipping lines. They are employed in worldwide service.
                        <br/>
                        Ship specifications are available on
                        <Link target="_blank" rel="noreferrer" href={'https://offengroup.de/'}>
                            &nbsp; www.offengroup.de
                        </Link>
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h6" color="textSecondary" >
                <Box fontFamily="Roboto" textAlign="left" fontWeight="fontWeightBold" m={1}>
                        - Samos Steamship Co, Athens, Greece
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                        Samos Steamship is a ship management company operating a mixed fleet of tankers and bulk carriers.
                        Samos manages a fleet of 3.0 million tons of an average age of 7 years.
                        <br/>
                        Ship specifications are available on
                        <Link target="_blank" rel="noreferrer" href={'https://samossteamship.gr/#home'}>
                            &nbsp; www.samossteamship.gr
                        </Link>
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h6" color="textSecondary" >
                <Box fontFamily="Roboto" textAlign="left" fontWeight="fontWeightBold" m={1}>
                        - Alberta Shipmanagenent, Athens, Greece
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                        Alberta Shipmagement  operates a modern fleet of eco tankers and bulk carriers.
                        <br/>
                        All  vessels are built in top yards in Japan and Korea, ordered to a very high  specification
                        to meet the requirements of even the most demanding charterers and terminals worldwide
                        <br/>
                        Ship specifications are available on
                        <Link target="_blank" rel="noreferrer" href={'https://albertashipmanagement.com/'}>
                            &nbsp; www.albertashipmanagement.com
                        </Link>
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h6" color="textSecondary" >
                <Box fontFamily="Roboto" textAlign="left" fontWeight="fontWeightBold" m={1}>
                        - A.M.Nomikos, Athens, Greece
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                        A.M.Nomikos operates a mixed fleet of bulk carriers and container vessels.
                        The Company is developing dynamically and for the time being total number of ships under control is above 50 units.
                        <br/>
                        Ship specifications are available on
                    <Link target="_blank" rel="noreferrer" href={'https://www.amnomikos.com/'}>
                        &nbsp; www.amnomikos.com
                    </Link>
                </Box>
            </Typography>
        </Paper>
    );
}

export default Fleet;
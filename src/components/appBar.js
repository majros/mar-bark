import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Grid from '@material-ui/core/Grid';

import imgLogo from '../img/logo.gif';
import bannerLogo from '../img/banner.webp';
import AboutUs from "./pages/aboutUs";
import Vacancies from "./pages/vacancies";
import Fleet from "./pages/fleet";
import Application from "./pages/application";
import Contact from "./pages/contact";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <span>
          {children}
        </span>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        color: '#000000',
        marginRight: theme.spacing(4),
        '&$selected': {
            fontWeight: theme.typography.fontWeightBold,
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    logo: {
        height: window.innerWidth > 450 ? 70 : 25,
        margin: theme.spacing(2),
    },
    bannerLogo: {
        backgroundImage: `url(${bannerLogo})`,
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '35vh',
    },
    contactsContainer: {
        fontFamily: '"Segoe UI"',
        margin: theme.spacing(1),
        width: '100%',
    },
    leftBox: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.45,
    },
    rightBox: {
        lineHeight: 1.45,
    },
}));

export default function CustomAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const setCenter = window.innerWidth > 450 ? "fullWidth" : "scrollable";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isWide = window.innerWidth >= 600;
    const leftBoxStyle = {
        minWidth: isWide ? 360 : 'auto',
        marginRight: isWide ? 24 : 0, // эквивалент theme.spacing(3)
        paddingRight: isWide ? 8 : 0,
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} alt='icon' src={imgLogo} />
                    <Typography component="div" variant="subtitle2" color="textPrimary">
                        <Box fontFamily='"Segoe UI"' m={1}>
                            all messengers:
                            <br />
                            +38 066 271 3222 - <b> Mrs.Yulia </b>
                            <br />
                            +38 097 733 5077 - <b> Mrs.Anna </b>
                        </Box>
                    </Typography>
                </Toolbar>

                <div className={classes.bannerLogo}>
                </div>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    scrollButtons="on"
                    variant={setCenter}
                    aria-label="scrollable auto tabs"
                >
                    <AntTab label="ABOUT US" {...a11yProps(0)} />
                    <AntTab label="VACANCIES" {...a11yProps(1)} />
                    <AntTab label="FLEET" {...a11yProps(2)} />
                    <AntTab label="APPLICATION" {...a11yProps(3)} />
                    <AntTab label="CONTACT" {...a11yProps(4)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <AboutUs />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Vacancies />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Fleet />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Application />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Contact />
            </TabPanel>
        </div>
    );
}
////
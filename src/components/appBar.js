import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import imgLogo from '../img/logo.gif';
import bannerLogo from '../img/banner.webp';
import AboutUs from "./pages/aboutUs";
import Vacancies from "./pages/vacancies";
import Fleet from "./pages/fleet";
import Application from "./pages/application";
import Contact from "./pages/contact";

import Test from '../test'

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
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
        zoom: '50%'
    },
}));

export default function CustomAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const setCenter = window.innerWidth > 450 ? "fullWidth" : "scrollable";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} alt='icon' src={imgLogo}/>
                    <Typography component="div" variant="subtitle2" color="textPrimary">
                        <Box fontFamily='"Segoe UI"' m={1}>
                            +38 0629 41-36-<b>(25) (38)</b>
                            <br/>
                            +38 0629 41-71-<b>(48) (49) (50)</b>
                            <br/>
                            info@bark.com.ua
                        </Box>
                    </Typography>
                </Toolbar>
                <img className={classes.bannerLogo} alt='icon' src={bannerLogo}/>
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
                <AboutUs/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Vacancies/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Fleet/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Application/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Contact/>
            </TabPanel>
        </div>
    );
}
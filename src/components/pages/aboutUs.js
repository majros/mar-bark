import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
}));

const AboutUs = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper} elevation={3} >
            <Typography className={classes.textHeaderPage} component="div" variant="h2" color="secondary">
                <Box textAlign="center" m={1}>
                    About us
                </Box>
            </Typography>

            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={5}>
                    WELCOME TO BARK MANNING AGENCY!
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    Bark is an independent manning agency based in Mariupol and fully certified in accordance with Ukrainian legislation.
                    <br/>
                    MLC 2006 and ISO 9001:2015 certificates holder.
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={5}>
                    BARK PERFORMS FOLLOWING SERVICES:
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    <li>Crew recruitment and procedures for joining ship and repatriating crew.</li>
                    <li>Certification of crew.</li>
                    <li>Medical examinations and fitness certificates.</li>
                    <li>Implementation and follow-up of drug and alcohol policies.</li>
                    <li>Arranging NIS, Cyprus, Panamanian, Liberian and other licences and seaman’s books.</li>
                    <li>Foreign language test.</li>
                    <li>Company policy and ISM code familiarisation & drilling.</li>
                    <li>Issue tickets for on-signers.</li>
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={5}>
                    Уважаемые моряки,
                    <br/>
                    настоящим ставим Вас в известность о начале работы c 01.04.2022 обьединенного
                    <br/>
                    координационоого центра МА Марстафф Одесса и Барк Мариуполь в Греции.
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    Телефоны:
                    <br/>
                    +30 697 195 4418 - Юлия
                    <br/>
                    +30 697 195 4419 - Анна
                    <br/>
                    e-mail: barkmarstaffgr@gmail.com
                    <br/>
                    все мессенджеры:
                    <br/>
                    +38 066 271 3222 - Юлия
                    <br/>
                    +38 097 733 5077 - Анна
                    <br/>
                    Все услуги предоствляются бесплатно, обновление вакансий на сайте
                    <br/>
                    www.bark.com.ua
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="h5" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="justify" m={5}>
                    Dear seafarers,
                    <br/>
                    herewith informing that starting from 01.04.2022 united coordinating centre of crewing
                    <br/>
                    agencies Marstaff Odessa and Bark Mariupol will work in Greece.
                </Box>
            </Typography>
            <Typography className={classes.textBody} component="div" variant="body1" color="textPrimary" >
                <Box fontFamily="Roboto" textAlign="left" m={1}>
                    phones:
                    <br/>
                    +30 697 195 4418 - Mrs.Yulia
                    <br/>
                    +30 697 195 4419 - Mrs.Anna
                    <br/>
                    e-mail: barkmarstaffgr@gmail.com
                    <br/>
                    all messengers:
                    <br/>
                    +38 066 271 3222 - Mrs.Yulia
                    <br/>
                    +38 097 733 5077 - Mrs.Anna
                    <br/>
                    All services are free of charge, update of avaiable vacancies, please, see
                    <br/>
                    www.bark.com.ua
                </Box>
            </Typography>
        </Paper>
    );
}

export default AboutUs;
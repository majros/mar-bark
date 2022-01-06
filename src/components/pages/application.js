import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import appForm from '../appForm.doc';

const Application = () => {
    return(
        <React.Fragment>
            <Typography style={{fontWeight: 700}} component="span"
                        display="block"
                        gutterBottom={true}
                        variant="h2"
                        color="secondary" >
                Application
            </Typography>
            <br/>
            <Typography component="span"
                        display="block"
                        variant="h5"
                        color="textPrimary" >
                Dear seaman, please, download one from enclosed applications:
            </Typography>
            <br/>
            <Button size={window.innerWidth > 450 ? "large" : "small"}
                    variant="contained"
                    color="default"
                    href={appForm}
                    download="appForm"
                    startIcon={<GetAppIcon/>}
            >
                CPO application form
            </Button>
            <br/>
            <br/>
            fill it and send  to:
            <br/>
            info@bark.com.ua
        </React.Fragment>
    );
}

export default Application;
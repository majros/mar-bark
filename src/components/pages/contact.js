import React from "react";
import Typography from "@material-ui/core/Typography";

const Contact = () => {
    return(
        <React.Fragment>
            <Typography style={{fontWeight: 700}} component="span"
                        display="block"
                        gutterBottom={true}
                        variant="h2"
                        color="secondary" >
                Contact
            </Typography>
            <br/>
            <Typography component="span"
                        display="block"
                        variant="h5"
                        color="textPrimary" >
                MA Bark Agency
            </Typography>
            <br/>
            11, Chernomorskaya str., 27 apt.,
            <br/>
            Mariupol Ukraine
            <br/>
            Phones: +38-0629-413625/28
            <br/>
            e-mail: info@bark.com.ua
        </React.Fragment>
    );
}

export default Contact;
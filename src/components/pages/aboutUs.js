import React from "react";
import {Typography} from "@material-ui/core";

const AboutUs = () => {
    return(
        <React.Fragment>
            <Typography style={{fontWeight: 700}} component="span"
                        display="block"
                        gutterBottom={true}
                        variant="h2"
                        color="secondary"
                        >
                About us
            </Typography>
            <br/>
            <Typography component="span"
                        display="block"
                        variant="h5"
                        color="textPrimary" >
                    WELCOME TO BARK MANNING AGENCY!
            </Typography>
            <br/>
            Marstaff is an independent manning agency based in Odessa and fully certified in accordance with Ukrainian legislation.
            MLC 2006 and ISO 9001:2015 certificates holder.
            <br/>
            <br/>
                <Typography component="span"
                            display="block"
                            variant="h5"
                            color="textPrimary" >
                    BARK PERFORMS FOLLOWING SERVICES:
                </Typography>
            <br/>
            <li>Crew recruitment and procedures for joining ship and repatriating crew.</li>
            <li>Certification of crew.</li>
            <li>Medical examinations and fitness certificates.</li>
            <li>Implementation and follow-up of drug and alcohol policies.</li>
            <li>Arranging NIS, Cyprus, Panamanian, Liberian and other licences and seaman’s books.</li>
            <li>Foreign language test.</li>
            <li>Company policy and ISM code familiarisation & drilling.</li>
            <li>Issue tickets for on-signers.</li>
        </React.Fragment>
    );
}

export default AboutUs;
import React from "react";
import Typography from "@material-ui/core/Typography";

const Fleet = () => {
    return(
        <React.Fragment>
            <Typography style={{fontWeight: 700}} component="span"
                        display="block"
                        gutterBottom={true}
                        variant="h2"
                        color="secondary" >
                Fleet
            </Typography>
            <br/>
            <Typography component="span"
                        display="block"
                        variant="h5"
                        color="textPrimary" >
                Our main Principal is Offen Group from Hamburg, Germany.
            </Typography>
            <br/>
            The Offen Group has a long and proud history stretching from the foundation of RCPO in 1971
            to the current day where it has grown to become one of the world's leading managers of
            container shipping, bulk carriers and product tankers.
            <br/>
            It has some 50 container vessels in service or currently under construction; most of them
            are chartered under long-term contract to leading shipping lines. They are employed in
            worldwide service.
        </React.Fragment>
    );
}

export default Fleet;
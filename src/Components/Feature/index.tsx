import React from "react";
import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import {FeatureStyled} from "./style";

const Feature = () => {
    return (
        <FeatureStyled>
            <Container>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <div className="featureImage">
                            <img src="../react/images/possiblity_img.png" alt="possiblity_img" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="featureContent">
                            <h6>Request Early Access to Get Started</h6>
                            <h2>The possibilities are beyond your imagination</h2>
                            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                            <Link href="#">Request Early Access to Get Started</Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </FeatureStyled>
    )
}

export default Feature;
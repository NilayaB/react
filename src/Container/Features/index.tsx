import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {FeatureMailStyled} from "./style";

const Features = () => {
    return (
        <FeatureMailStyled>
            <Container>
                <Grid container spacing={2} alignItems='baseline'>
                    <Grid item md={4}>
                        <div className="feature-left">
                            <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                            <p>Request Early Access to Get Started</p>
                        </div>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={7}>
                        <div className="feature-right">
                            <Grid container spacing={2} alignItems='baseline'>
                                <Grid item md={4}>
                                    <h6>Improving end distrusts instantly </h6>
                                </Grid>
                                <Grid item md={8}>
                                    <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
                                </Grid>
                                <Grid item md={4}>
                                    <h6>Become the tended active</h6>
                                </Grid>
                                <Grid item md={8}>
                                    <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                                </Grid>
                                <Grid item md={4}>
                                    <h6>Message or am nothing </h6>
                                </Grid>
                                <Grid item md={8}>
                                    <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
                                </Grid>
                                <Grid item md={4}>
                                    <h6>Really boy law county </h6>
                                </Grid>
                                <Grid item md={8}>
                                    <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </FeatureMailStyled>
    )
}

export default Features;
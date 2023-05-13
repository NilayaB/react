import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {PossiblityStyle} from "./style"
const Possiblity = () => {
    return (
        <PossiblityStyle>
            <Container>
                <div className="posiblity">
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} md={8}>
                            <div className="posiblityLeft">
                                <p>Request Early Access to Get Started</p>
                                <h5>Register today & start exploring the endless possiblities.</h5>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="posiblityRight">
                                <Link href="#">Get Started</Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </PossiblityStyle>
    )
}

export default Possiblity;
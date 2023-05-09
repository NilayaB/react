import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {PossiblityStyle} from "./style"
const Possiblity = () => {
    return (
        <PossiblityStyle>
            <Container>
            <Grid container spacing={2} alignItems='center'>
                <Grid item md={6}>
                </Grid>
                </Grid>
            </Container>
        </PossiblityStyle>
    )
}

export default Possiblity;
import React from "react";
import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import {WhatMainStyled} from "./style"


const WhatGPT3 = () => {
    return (
        <WhatMainStyled>
            <Container>
                <div className="what-inner">
                    <div className="what-inner-head">
                        <Grid container spacing={2} alignItems='baseline'>
                            <Grid item xs={12} md={3}>
                                <h3>What is GPT-3</h3>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="what-inner-middle">
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={12} md={6}>
                                <h2>The possibilities are beyond your imagination</h2>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Link>
                                    <p>Explore The Library</p>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="what-inner-bottom">
                        <Grid container spacing={2} alignItems='baseline'>
                            <Grid item xs={12} md={4}>
                                <h3>Chatbots</h3>
                                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <h3>Knowledgebase</h3>
                                <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <h3>Education</h3>
                                <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </WhatMainStyled>
    )
}

export default WhatGPT3;
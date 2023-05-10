import React from "react";
import { Container } from "@mui/system";
import {Wrapcta} from "./style"
import { Grid, Link } from "@mui/material";

const CTA = () => {
    return (
       <Wrapcta>
            <Container>
                <Grid container spacing={2} alignItems='center'>
                        <Grid item md={6}>
                            <div className="ctahead">
                                <h2>A lot is happening, We are blogging about it.</h2>
                            </div>
                        </Grid>
                </Grid>
                <div className="cta">
                    <Grid container spacing={2}>
                            <Grid item md={4}>
                                <div className="ctainner">
                                    <div className="ctainnerimage">
                                        <img src="../react/images/cta1.png" alt="cta" />
                                    </div>
                                    <div className="ctainnercontent">
                                        <p>Sep 26, 2021</p>
                                        <h6>GPT-3 and Open  AI is the future. Let us exlore how it is?</h6>
                                        <Link href="#">Read Full Article</Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={8}>
                                <Grid container spacing={2} alignItems='center'>
                                    <Grid item md={6}>
                                        <div className="ctainner ctainner1">
                                            <div className="ctainnerimage">
                                                <img src="../react/images/cta2.png" alt="cta" />
                                            </div>
                                            <div className="ctainnercontent">
                                                <p>Sep 26, 2021</p>
                                                <h6>GPT-3 and Open  AI is the future. Let us exlore how it is?</h6>
                                                <Link href="#">Read Full Article</Link>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={6}>
                                        <div className="ctainner ctainner1">
                                            <div className="ctainnerimage">
                                                <img src="../react/images/cta3.png" alt="cta" />
                                            </div>
                                            <div className="ctainnercontent">
                                                <p>Sep 26, 2021</p>
                                                <h6>GPT-3 and Open  AI is the future. Let us exlore how it is?</h6>
                                                <Link href="#">Read Full Article</Link>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={6}>
                                        <div className="ctainner ctainner1">
                                            <div className="ctainnerimage">
                                                <img src="../react/images/cta4.png" alt="cta" />
                                            </div>
                                            <div className="ctainnercontent">
                                                <p>Sep 26, 2021</p>
                                                <h6>GPT-3 and Open  AI is the future. Let us exlore how it is?</h6>
                                                <Link href="#">Read Full Article</Link>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={6}>
                                        <div className="ctainner ctainner1">
                                            <div className="ctainnerimage">
                                                <img src="../react/images/cta5.png" alt="cta" />
                                            </div>
                                            <div className="ctainnercontent">
                                                <p>Sep 26, 2021</p>
                                                <h6>GPT-3 and Open  AI is the future. Let us exlore how it is?</h6>
                                                <Link href="#">Read Full Article</Link>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                </div>
            </Container>
       </Wrapcta>
    )
}

export default CTA;
import { Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {Wrapfooter} from "./style"
const Footer = () => {
    return (
        <Wrapfooter>
            <Container>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item md={12}>
                        <div className="footerhead">
                            <h2>Do you want to step in to the future before others</h2>
                            <Link href="#">Request Early Access</Link>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <div className="footerlogo">
                            <img src="./react/images/logo.png" alt="logo_foot" />
                            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={7}>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <div className="footerlist">
                                    <h6>Links</h6>
                                    <ul>
                                        <li><Link href="#">Overons</Link></li>
                                        <li><Link href="#">Social Media</Link></li>
                                        <li><Link href="#">Counters</Link></li>
                                        <li><Link href="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="footerlist">
                                    <h6>Company</h6>
                                    <ul>
                                        <li><Link href="#">Terms & Conditions</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="footerlist">
                                    <h6>Get in touch</h6>
                                    <ul>
                                        <li><Link href="#">Crechterwoord K12 182 DK Alknjkcb</Link></li>
                                        <li><Link href="#">085-132567</Link></li>
                                        <li><Link href="#">info@payme.net</Link></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <div className="footercopyright">
                            <p>© 2021 GPT-3. All rights reserved.</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Wrapfooter>
    )
}

export default Footer;
import React from "react";
import { BannerStyle, BannerLeftStyle, BannerRightStyle } from './style';
import { Button, Container, FormGroup, Grid, TextField } from "@mui/material";
const Header = () => {
    return (
        <BannerStyle>
            <Container>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={12} md={6}>
                    <BannerLeftStyle>
                        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <div className="banner-form">
                            <FormGroup>
                                <TextField  label="email" id="email" />
                                <Button>Get Started</Button>
                            </FormGroup>
                        </div>
                        <div className="visit">
                            <ul>
                                <li>
                                    <img src="../react/images/visit-1.png" alt="visit-img" />
                                </li>
                                <li>
                                    <img src="../react/images/visit-1.png" alt="visit-img" />
                                </li>
                                <li>
                                    <img src="../react/images/visit-1.png" alt="visit-img" />
                                </li>
                                <li>
                                    <img src="../react/images/visit-1.png" alt="visit-img" />
                                </li>
                                <li>
                                    <div className="visit-num"><p>1.6k+</p></div>
                                </li>
                            </ul>
                            <p>1,600 people requested access a visit in last 24 hours</p>
                        </div>
                    </BannerLeftStyle>
                </Grid> 

                <Grid item xs={12} md={6}>
                    <BannerRightStyle>
                        <img src="../react/images/header_image.png" alt="banner_img" />
                    </BannerRightStyle>
                </Grid>                
            </Grid>
            </Container>
        </BannerStyle>
    )
}

export default Header;
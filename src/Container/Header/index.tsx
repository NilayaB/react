import React from "react";
import { BannerStyle, BannerContentStyle, BannerImageStyle } from './style';
import { Container, Grid } from "@mui/material";
const Header = () => {
    return (
        <BannerStyle>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <BannerContentStyle>
                        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        
                    </BannerContentStyle>
                </Grid> 

                <Grid item xs={6}>
                    <BannerImageStyle>

                    </BannerImageStyle>
                </Grid>                
            </Grid>
            </Container>
        </BannerStyle>
    )
}

export default Header;
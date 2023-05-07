import { Container } from "@mui/system";
import React from "react";
import {BrandMainStyled} from "./style";

const Brand = () => {
    return (
        <BrandMainStyled>
            <Container>
                <div className="BrandInner">
                    <img src="images/brand-1.png" alt="brand-1" />
                    <img src="images/brand-2.png" alt="brand-1" />
                    <img src="images/brand-3.png" alt="brand-1" />
                    <img src="images/brand-4.png" alt="brand-1" />
                </div>
            </Container>
        </BrandMainStyled>
    )
}

export default Brand;
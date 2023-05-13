import styled from "styled-components";

export const BrandMainStyled = styled.section `
    position:relative;
    .BrandInner {
        display:flex;
        align-items:center;
        justify-content:space-between;
        max-width: 670px;
        margin: 120px auto;
        ${props => props.theme.breakpoints.down("md")}{
            display:block;
            img {
                display:block;
                margin:0 auto 20px auto;
            }
        }
    }
`

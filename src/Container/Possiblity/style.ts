import styled from "styled-components";

export const PossiblityStyle = styled.section`
    position:relative;
    margin:154px 0;
    .posiblity {
        background:${props => props.theme.custom.gradient.textgradient};
        border: 1px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10.7236px;
        padding:50px 40px;
        .posiblityLeft {
            p {
                font-weight: ${props => props.theme.custom.fontWeight.md};
                font-size: ${props => props.theme.custom.fontSize.font12};
                line-height: 30px;
                color: #0E0E0E;
            }
            h5 {
                font-weight: ${props => props.theme.custom.fontWeight.bl};
                font-size: ${props => props.theme.custom.fontSize.font24};
                line-height: 45px;
                color: #000000;
            }
        }
        .posiblityRight {
            text-align:right;
            a {
                text-align:center;
                background: #000000;
                border-radius: 40px;
                padding:12px 45px;
                font-weight: 700;
                font-size: 18px;
                font-weight: ${props => props.theme.custom.fontWeight.bd};
                font-size: ${props => props.theme.custom.fontSize.font18};
                line-height: 30px;
                color: #FFFFFF;
                text-decoration:none;
            }
        }
    }
`
import styled from "styled-components";

export const FeatureStyled = styled.section`
    position:relative;
    .featureImage {
        img {
            width:100%;
            height:100%;
        }
    }

    .featureContent {
        h6 {
            font-weight: ${props => props.theme.custom.fontWeight.md};
            font-size: ${props => props.theme.custom.fontSize.font16};
            line-height: 30px;
            color:#71E5FF;
            margin-bottom:10px;
        }

        h2 {
            max-width:426px;
            font-weight: ${props => props.theme.custom.fontWeight.bl};
            font-size: 34px;
            line-height: 45px;
            background: ${props => props.theme.custom.gradient.textgradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom:23px;
        }
        p {
            font-weight: ${props => props.theme.custom.fontWeight.rg};
            font-size: ${props => props.theme.custom.fontSize.font16};
            line-height: 30px;
            margin-bottom:30px;
            color: ${props => props.theme.palette.secondary.light};
        }
        a {
            font-weight:${props => props.theme.custom.fontWeight.md};
            font-size: ${props => props.theme.custom.fontSize.font16};
            line-height: 30px;
            color: #FF8A71;
            text-decoration:none;
        }
    }
`
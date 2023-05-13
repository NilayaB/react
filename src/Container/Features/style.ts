import styled from "styled-components";

export const FeatureMailStyled = styled.section`
    position:relative;
    padding:200px 0 0 0;
    &:after {
        position:absolute;
        content:'';
        width: 777px;
        height: 777px;
        left: -300px;
        top: 0;
        border-radius: 50%;
        z-index:-1;
        background: #07325F;
        filter: blur(282px);
        ${props => props.theme.breakpoints.down("md")} {
            width:100%;
        }
    }
    .feature-left {
        h2 {
            font-weight: ${props => props.theme.custom.fontWeight.bl};
            font-size: 34px;
            line-height: 45px;
            background: ${props => props.theme.custom.gradient.textgradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom:34px;
            ${props => props.theme.breakpoints.down("lg")} {
                font-size: 24px;
                line-height: 34px;
            }
        }
        a {
            font-weight:${props => props.theme.custom.fontWeight.md};
            font-size: ${props => props.theme.custom.fontSize.font16};
            line-height: 30px;
            color: #FF8A71;
            text-decoration:none;
        }
    }

    .feature-right {
        h6 {
            font-weight:${props => props.theme.custom.fontWeight.md};
            font-size:${props => props.theme.custom.fontSize.font18};
            line-height: 24px;
            letter-spacing: -0.04em;
            color: #FFFFFF;
            position:relative;
            margin-bottom:50px;
            &:after {
                position:absolute;
                content:'';
                width: 38px;
                height: 3px;
                top:-10px;
                left:0;
                margin-bottom:10px;
                background: ${props => props.theme.custom.gradient.textgradient};
            }
            &:hover:after {
                animation-name: after-animation;
                animation-duration: 2s;
            }
            
            @keyframes after-animation {
            0% { width:0; transition:1s; }
            100% { width:50px; transition:1s; }
            }
        }

        p{
            font-weight:${props => props.theme.custom.fontWeight.md};
            font-size:${props => props.theme.custom.fontSize.font14};
            line-height: 24px;
            color: #81AFDD;
            margin-bottom:50px;
        }
    }
`
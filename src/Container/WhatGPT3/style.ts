import styled, {Keyframes} from "styled-components";


export const WhatMainStyled = styled.section`
    position:relative;
    .what-inner {
        position:relative;
        background-color: #042C54;
        padding:50px;
        z-index:1;
        overflow:hidden;
        &:after {
            position:absolute;
            content:'';
            width: 581px;
            height: 410px;
            left: -450px;
            top: -232px;
            z-index: -1;
            background: #0F4279;
            filter: blur(60px);
        }
        &:before {
            position:absolute;
            content:'';
            width: 581px;
            height: 410px;
            right: -265px;
            bottom: -322px;
            z-index: -1;
            background: #0F4279;
            filter: blur(60px);
        }
        .what-inner-head {
            h3 {
                font-size:${props => props.theme.custom.fontSize.font24};
                font-weight:${props => props.theme.custom.fontWeight.bl};
                color:#fff;
                line-height: 75px;                
                letter-spacing: -0.04em; 
                margin:0;
                position:relative;
                &:after {
                    position:absolute;
                    content:'';
                    width: 38px;
                    height: 3px;
                    top:0;
                    left:0;
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
            p {
                font-size:${props => props.theme.custom.fontSize.font16};
                font-weight:${props => props.theme.custom.fontWeight.md};
                color: #81AFDD;
                line-height: 30px;
                margin:0;
            }
        }

        .what-inner-middle {
            margin-top: 90px;
            h2 {
                font-weight:${props => props.theme.custom.fontWeight.bl};
                font-size: 34px;
                line-height: 45px;
                background: ${props => props.theme.custom.gradient.textgradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
            a {
                text-decoration:none;
                float:right;
                ${props => props.theme.breakpoints.down("md")} {
                    float:left;
                }
                P {
                    font-weight:${props => props.theme.custom.fontWeight.md};
                    font-size: ${props => props.theme.custom.fontSize.font16};
                    line-height: 30px;
                    color: #FF8A71;
                    text-align:right;
                }
            }
        }

        .what-inner-bottom {
            margin-top:90px;
            h3 {
                font-size:${props => props.theme.custom.fontSize.font24};
                font-weight:${props => props.theme.custom.fontWeight.bl};
                color:#fff;
                line-height: 75px;                
                letter-spacing: -0.04em; 
                margin:0;
                position:relative;
                &:after {
                    position:absolute;
                    content:'';
                    width: 38px;
                    height: 3px;
                    top:0;
                    left:0;
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
            p {
                font-size:${props => props.theme.custom.fontSize.font16};
                font-weight:${props => props.theme.custom.fontWeight.md};
                color: #81AFDD;
                line-height: 30px;
                margin:0;
            }
        }
    }

`
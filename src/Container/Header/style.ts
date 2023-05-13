import styled from "styled-components";

export const BannerStyle = styled.section`
    position:relative;
    padding-top: 120px;
    
`

export const BannerLeftStyle = styled.div`
    position:relative;
    h1 {
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        letter-spacing: -0.04em;
        background:${props => props.theme.custom.gradient.textgradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom:33px;
        ${props => props.theme.breakpoints.down("lg")} {
            font-size: 42px;
            line-height: 55px;
        },
    }
    p {
        font-size:${props => props.theme.custom.fontSize.font20};
        font-weight:${props => props.theme.custom.fontWeight.rg};
        color:${props => props.theme.palette.secondary.light};
        line-height: 27px;
        margin-bottom:30px;
    }
    .banner-form {
        .MuiFormGroup-root {
            flex-direction:row;
            .MuiTextField-root {
                background: #052D56;
                border-radius: 5px 0px 0px 5px;
                @media (max-width:994px) {
                    width:100%;
                }
                input {
                    font-size:${props => props.theme.custom.fontSize.font20};
                    font-weight:${props => props.theme.custom.fontWeight.rg};
                    color:#3D6184;
                    line-height: 27px;
                    &:focus {
                        border:0!important;
                    }
                }
                .MuiInputLabel-root {
                    font-size:${props => props.theme.custom.fontSize.font20};
                    font-weight:${props => props.theme.custom.fontWeight.rg};
                    color:#3D6184;
                    line-height: 27px;
                }
            }
            button {
                font-size:${props => props.theme.custom.fontSize.font20}!important;
                font-weight:${props => props.theme.custom.fontWeight.bd}!important;
                line-height:27px;
                background: ${props => props.theme.palette.secondary.dark}!important;
                color:#fff!important;
                padding:0 20px;
                border-radius: 0 5px 5px 0;
                @media (max-width:994px) {
                    padding: 12px 0;
                    width: 100%;
                    margin-top: 15px;
                }
            }
        }
    }
    .visit {
        display:flex;
        align-items:center;
        margin-top:38px;
        ul {
            display:flex;
            align-items:center;
            padding:0;
            li {
                list-style:none;
                width:36px;
                height:36px;
                &:first-child {
                    margin-left:0;
                }
                margin-left:-10px;
                img {
                    width:100%;
                    height:100%;
                }
                .visit-num {
                    background: #13DED2;
                    border: 2.08948px solid #FFFFFF;
                    border-radius:50%;
                    width:36px;
                    height:36px;
                    p {
                        font-size:${props => props.theme.custom.fontSize.font8}!important;
                        font-weight:${props => props.theme.custom.fontWeight.bl}!important;
                        line-height: 38px;
                        color:#000;
                        margin: 0;
                        text-align: center;
                    }
                }
            }
        }
        p {
            font-size:${props => props.theme.custom.fontSize.font12}!important;
            font-weight:${props => props.theme.custom.fontWeight.md}!important;
            line-height: 38px;
            color:#fff;
            margin-left:13px;
            margin-bottom:0;
        }
    }
`


export const BannerRightStyle = styled.div`
    position:relative;
    img {
        width:100%;
        height:100%;
    }
`
import styled from "styled-components";

export const Wrapcta = styled.section`
    position:relative;
    .ctahead {
        h2 {
            font-weight: ${props => props.theme.custom.fontWeight.bl};
            font-size: 62px;
            line-height: 75px;
            letter-spacing: -0.04em;
            background:${props => props.theme.custom.gradient.textgradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            ${props => props.theme.breakpoints.down("lg")} {
                font-size: 42px;
                line-height: 55px;
            }
        }
    }

    .cta {
        position:relative;
        margin-top:115px;
        .ctainner {
            background: #042C54;
            height:100%;
            &.ctainner1 .ctainnerimage {
                height:130px;
            }
            &.ctainner1 .ctainnercontent {
                height: calc(100% - 130px);
                h6 {
                    font-size: ${props => props.theme.custom.fontSize.font18};
                }
                a {
                    position:static;
                    margin-top:10px;
                    display:block;
                }
            }
            .ctainnerimage {
                height:287px;
                img {
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
            }
            .ctainnercontent {
                position:relative;
                padding:26px;
                height: calc(100% - 287px);
                p {
                    font-weight: ${props => props.theme.custom.fontWeight.bd};
                    font-size: ${props => props.theme.custom.fontSize.font12};
                    line-height: 35px;
                    color: #FFFFFF;
                }
                h6 {
                    font-weight: ${props => props.theme.custom.fontWeight.bl};
                    font-size: ${props => props.theme.custom.fontSize.font24};
                    line-height: 30px;
                    color: #FFFFFF;
                }

                a {
                    position:absolute;
                    left:26px;
                    bottom:26px;
                    font-weight: ${props => props.theme.custom.fontWeight.bd};
                    font-size: ${props => props.theme.custom.fontSize.font12};
                    line-height: 35px;
                    color: #FFFFFF;
                    &:hover {
                        text-decoration:none;
                    }
                    ${props => props.theme.breakpoints.down("lg")} {
                        position: static;
                        margin-top: 10px;
                        display: block;
                    }
                }
            }
        }
    }
`
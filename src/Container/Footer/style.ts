import styled from "styled-components";

export const Wrapfooter = styled.section`
    position:relative;
    padding:175px 0 27px 0;
    background:#031B34;
    margin-top:150px;
    margin-bottom:150px;
    .footerhead {
        text-align:center;
        margin-bottom:150px;
        h2 {
            font-weight: ${props => props.theme.custom.fontWeight.bl};
            font-size: 62px;
            line-height: 75px;
            text-align: center;
            letter-spacing: -0.04em;
            background: ${props => props.theme.custom.gradient.textgradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom:64px
        }
        a {
            border: 1px solid #FFFFFF;
            text-decoration:none;
            padding:24px;
            font-size: ${props => props.theme.custom.fontSize.font18};
            line-height: 21px;
            color: #FFFFFF;
        }
    }
    .footerlogo {
        p {
            font-size: ${props => props.theme.custom.font12};
            line-height: 20px;
            margin-top:25px;
            color: #FFFFFF;
        }
    }
    .footerlist {
        h6 {
            font-size: ${props => props.theme.custom.fontSize.font14};
            line-height: 16px;
            margin-bottom:36px;
            color: #FFFFFF;
        }

        ul {
            padding:0;
            li {
                list-style:none;
                a {
                    font-size: ${props => props.theme.custom.fontSize.font12};
                    line-height: 14px;
                    color: #FFFFFF;
                    margin-bottom:26px;
                }
            }
        }
    }

    .footercopyright {
        margin-top:83px;
        text-align:center;
        p {
            font-size: ${props => props.theme.custom.fontSize.font12};
            line-height: 14px;
            color: #FFFFFF;
        }
    }

`
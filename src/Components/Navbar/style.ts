import styled from "styled-components";

export const HeaderStyled = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 1111;
    header {
        background: transparent;
        box-shadow: none;
        margin: 40px 0 0 0;
    }
`

export const LogoStyled = styled.div`
    position:relative;
`

export const DestopMenuStyled =styled.div`
    position:relative;
    display:flex;
    align-items:center;
    a {
        font-size:${props => props.theme.custom.fontSize.font18};
        font-weight:${props => props.theme.custom.fontWeight.md};
        font-family:${props => props.theme.typography.fontFamily};
        color:#fff;
        margin: 0;
    }
`

export const DesktopButtonStyled =styled.div`
    position:relative;
    display:flex;
    align-items:center;
    a {
        font-size:${props => props.theme.custom.fontSize.font18};
        font-weight:${props => props.theme.custom.fontWeight.md};
        font-family:${props => props.theme.typography.fontFamily};
        color:#fff;
        margin: 0;
        &:last-child {
            background: #FF4820;
            border-radius: 5px;
            padding:16px 45px;
            margin-left:26px;
        }
    }
`
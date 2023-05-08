import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
    * {
        box-sizing:border-box;
    }
    body {
        position:relative;
        overflow-x:hidden;
        background-color: ${props => props.theme.palette.primary.main};
        font-family:${props => props.theme.typography.fontFamily};
        &:after {
            position: absolute;
            content: "";
            width: 1000px;
            height: 1000px;
            background: rgb(0, 40, 83);
            filter: blur(282px);
            left: -336px;
            top: -305px;
            border-radius: 100%;
            z-index: -1;
        }
    
        &:before {
            position: absolute;
            content: "";
            filter: blur(282px);
            border-radius: 100%;
            z-index: -1;
            width: 701px;
            height: 496px;
            right: -235px;
            top: 400px;
            background: #072D56;
        }
    }
    
    html,body {
        margin:0;
        padding:0;
        width: 100%;
        height: 100%;
    }

    h1,h2,h3,h4,h5,h6,p {
        margin:0;
        padding:0;
    }
`
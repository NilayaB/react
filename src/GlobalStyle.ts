import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
    * {
        box-sizing:border-box;
    }
    body {
        background-color: ${props => props.theme.palette.primary.main};
        font-family:${props => props.theme.typography.fontFamily};
    }
    
    html,body {
        margin:0;
        padding:0;
        width: 100%;
        height: 100%;
    }
`
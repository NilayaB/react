import React from "react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Pages/Home";
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className="app">
                <Home />
            </div>
        </ThemeProvider>
    )
}

export default App;
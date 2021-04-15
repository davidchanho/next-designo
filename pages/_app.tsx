import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../context";
import GlobalStyle from "../styles/Global";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;

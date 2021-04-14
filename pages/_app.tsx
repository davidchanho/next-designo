import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../context";
import GlobalStyle from "../styles/Global";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;

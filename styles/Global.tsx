import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { fontFamily, header1, header2, header3, paragraph1 } from "./fonts";

const GlobalStyle = createGlobalStyle`
${normalize()}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: ${fontFamily};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-size: ${header1.fontSize};
    line-height: ${header1.lineHeight};
    letter-spacing: ${header1.letterSpacing};
    font-weight: ${header1.fontWeight};
  }

  h2 {
    font-size: ${header2.fontSize};
    line-height: ${header2.lineHeight};
    letter-spacing:  ${header2.letterSpacing};
    font-weight: ${header2.fontWeight};
  }

  h3 {
    font-size: ${header3.fontSize};
    line-height: ${header3.lineHeight};
    letter-spacing:  ${header3.letterSpacing};
    font-weight: ${header3.fontWeight};
  }

  p {
    font-size: ${paragraph1.fontSize};
    line-height: ${paragraph1.lineHeight};
    letter-spacing:  ${paragraph1.letterSpacing};
    font-weight: ${paragraph1.fontWeight};
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
}

`;

export default GlobalStyle;

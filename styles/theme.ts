import { utils } from './utils';
import { breakpoints } from "./breakpoints";
import { black, grey, peach, white } from "./colors";

export const defaultTheme = {
  colors: {
    white: white["100"],

    primary: peach["200"],
    primaryText: white["100"],
    primaryHover: peach["100"],
    primaryHoverText: white["100"],

    dark: grey["100"],
    darker: grey["200"],
    black: black["100"],
  },
  breakpoints,
  utils
};

export const lightTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,
    
    primary: peach["200"],
    primaryText: white["100"],
    primaryHover: peach["100"],
    primaryHoverText: white["100"],
  },
};

export const darkTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,

    primary: white["100"],
    primaryText: grey["200"],
    primaryHover: peach["100"],
    primaryHoverText: grey["200"],
  },
};

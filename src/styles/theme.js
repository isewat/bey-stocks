import { createTheme } from '@material-ui/core';

const defaultFont = 'Open Sans'
const headingFont = 'Montserrat Alternates'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0277bd'
    },
    secondary: {
      main: '#cddc39'
    }
  },
  typography: {
    fontFamily: defaultFont,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: headingFont
    },
    h2: {
      fontFamily: headingFont
    },
    h3: {
      fontFamily: headingFont
    },
    h4: {
      fontFamily: headingFont
    },
    h5: {
      fontFamily: headingFont
    },
    h6: {
      fontFamily: headingFont
    },
    subtitle1: {
      fontFamily: headingFont
    },
    subtitle2: {
      fontFamily: headingFont
    }
  }
});

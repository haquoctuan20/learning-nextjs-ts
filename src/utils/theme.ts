import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    fontSize: 18,
  },

  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
      light: '#e2f7f4',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243d',
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },

      styleOverrides: {
        root: {
          color: 'black',
          fontWeight: '500',

          '&:hover, &.active': {
            color: '#556cd6',
            transition: 'all 0.3s',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9661ff',
      main: '#6B2AEE',
      dark: '#581ECD',
    },
    secondary: {
      light: '#2bfff2',
      main: '#02e7d9',
      dark: '#1dd6cb',
    },
    text: {
      primary: '#707070',
      secondary: '#9B9B9B',
    },
    error: {
      main: '#FC3C00',
    },
    warning: {
      main: '#FCA600',
    },
    success: {
      main: '#00D34D',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F0F0F0',
      200: '#D9D9D9',
      300: '#C4C4C4',
      400: '#9b9b9b',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Poppins ,Roboto, sans-serif',
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWith: 2,
          ':hover': {
            borderWith: 2,
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: { color: 'white' },
        },
      ],
    },
  },
});

export default theme;

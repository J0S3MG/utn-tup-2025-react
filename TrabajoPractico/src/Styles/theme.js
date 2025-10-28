import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555',
    },
    primary: {
      main: '#1976d2', // azul
    },
    secondary: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#221f1ffb',
      paper: '#302e2ed8',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ffb300',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
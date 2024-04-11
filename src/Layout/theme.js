// theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Define light mode colors
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Define dark mode colors
  },
});

export { lightTheme, darkTheme };

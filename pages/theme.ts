import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define your theme options
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: 'black', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
    success: {
      main: '#32CD32'
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize your fonts
  },
};

// Create the theme using the defined options
const theme = createTheme(themeOptions);

export default theme;


import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Shadows } from "@material-ui/core/styles/shadows"


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    shadows: new Array(25),
    elevation: "0",
    primary: {
      main: '#f2f6f5',
      dark: '#1c1f1e',
    },
    secondary: {
      main: '#eeaba3',
      dark: '#1c1f1e',
    },
    color: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2f6f5',
    },
    text: {
      primary: '#000000',
      secondary: '#1c1f1e',
    }

  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
    fontSize: 15,
  },
  paper: {
    elevation: "0"
  }
});


export default theme;
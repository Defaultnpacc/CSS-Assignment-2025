import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, lavender } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: '#ffffff',
        },
        accent: {
            main: lavender[500],
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
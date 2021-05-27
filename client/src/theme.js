import { createMuiTheme } from "@material-ui/core/styles";
import COLORS from "js/utils/colors";

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    default: {
      main: COLORS.default,
    },
    activeLink: {
      color: COLORS.metallicBlue,
    },
    background: {
      main: COLORS.background,
    },
    border:{
      color:"#c9c8cc",
  }
  },
  typography: {
    fontFamily: {
        default:"Inter,sans-serif",
    }
     
  },
});

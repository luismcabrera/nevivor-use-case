/** Create material ui Theme with this function */
import { createMuiTheme } from "@material-ui/core";

/** Contains colors, sizes and other default characteristics for css styles
 * of Material UI components and styles created with the tools of said library */
const theme = createMuiTheme({
  typography: {
    /** Setting the default Jost font */
    fontFamily: `"Jost"`,
    button: {
      textTransform: "none",
      fontSize: "1.2rem",
      fontWeight: "500",
      letterSpacing: "1px",
      lineHeight: "1.75rem",
    },
  },
  /** Setting the default colors */
  palette: {
    primary: {
      main: "#ff595a",
    },
    secondary: {
      main: "#ff7172",
      contrastText: "#fff",
    },
  },
});

export default theme;

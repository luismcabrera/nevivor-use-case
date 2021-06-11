/** -----------
 *  Imports
 * ------------ */

/**  Main component that will contain the multi-step form*/
import MultiStepForm from "./components/MultiStepForm";

/**  Provides information about the active step and functions to update everything related to it */
import GlobalStateProvider from "./global/providers/GlobalStateProvider";

/**  MuiThemeProvider Provides the different default settings such as colors and sizes
 *  for the Material Ui components and css styles created with said library. */
import { MuiThemeProvider } from "@material-ui/core";

/** Contains colors, sizes and other default characteristics for css styles
 * of Material UI components and styles created with the tools of said library */
import theme from "./global/theme";

/** DatePickers of Material UI */
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

/** Spanish language for the DatePicker components */
import DateFnsUtils from "@date-io/date-fns";

/** Spanish language for the DatePicker components */
import { es } from "date-fns/locale";

/** Container for "toast" type messages or alerts */
import { ToastContainer } from "react-toastify";

/** -----------
 *  Component
 * ------------ */

export default function App() {
  /** The highest point of the application after index.js */
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
        <GlobalStateProvider>
          <MultiStepForm />
          <ToastContainer />
        </GlobalStateProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

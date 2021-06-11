/** -----------
 *  Imports
 * ------------ */

/** React hook to create a context */
import { createContext } from "react";

/** Custom hook that creates a state to save the active step and some functions to navigate around it */
import useStep from "../../hooks/useStep";

/** Creating the GlobalStateContext */
export const GlobalStateContext = createContext();

/** Creating the GlobalStateProvider that will be placed at a high point to provide Context to certain components */
export default function GlobalStateProvider({ children }) {
  const stepData = useStep(0);
  const { activeStep, goToBackStep, goToNextStep, goToStep } = stepData;

  /** Indicates which is the last step (Enumerated starting with 0) */
  const lastStep = 4;

  /** Function that will be executed when the user presses on the next / ready button, to go to the next step */
  const handleNextClick = (formValues) => {
    switch (activeStep) {
      case 1:
        /** When going from step # 1 to # 2 it is checked if the user selected that he would come
         *  by vehicle, in order to jump to step # 3 or to step # 4 */
        formValues.comesByCar ? goToNextStep() : goToStep(activeStep + 2);
        break;

      case 3:
        console.log("Simulando petición http para obtener el código QR");
        console.log(formValues);
        goToNextStep();
        break;

      default:
        /** By default it will simply advance to the next step */
        goToNextStep();
        break;
    }
  };

  /** Function that will be executed when the user presses on the back button (In the Navbar), to go to the previous step (As the case may be) */
  const handleBackClick = (formValues) => {
    switch (activeStep) {
      /** In the zero step you could not go back to a previous step, for example you should go back to a different screen */
      case 0:
        alert(
          "En el paso cero no podría regresar a un paso anterior, debería por ejemplo regresar a una pantalla distinta"
        );
        break;

      case 3:
        /** If the user marked that he will visit with a vehicle, he returns to the previous step to edit the vehicle data, otherwise he returns two steps back */
        formValues.comesByCar ? goToBackStep() : goToStep(activeStep - 2);
        break;

      default:
        /** By default it will simply go to the back step */
        goToBackStep();
        break;
    }
  };

  /** In the context value the status "activeStep", update functions and everything related to it will be sent */
  const value = {
    ...stepData,
    lastStep,
    handleBackClick,
    handleNextClick,
  };

  return (
    // Provider JSX
    <GlobalStateContext.Provider value={value}>
      {/* Children allows nodes to be rendered below this component */}
      {children}
    </GlobalStateContext.Provider>
  );
}

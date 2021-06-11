/** -----------
 *  Imports
 * ------------ */
import { useState } from "react";

/** -----------
 *  Custom Hook
 * ------------ */
export default function useStep({ initialStep = 0, lastStep = 4 }) {
  /** Create state */
  const [activeStep, setActiveStep] = useState(initialStep);

  /** Function to navigate to next step. It will only work until the last step  */
  const goToNextStep = () => {
    if (activeStep < lastStep) return setActiveStep((prevStep) => prevStep + 1);
  };

  /** Function to navigate to back step. It will only work until the first step */
  const goToBackStep = () => {
    if (activeStep > 0) return setActiveStep((prevStep) => prevStep - 1);
  };

  /** Function to navigate to specific step. */
  const goToStep = (newStep) => {
    setActiveStep(newStep);
  };

  return { activeStep, goToStep, goToBackStep, goToNextStep };
}

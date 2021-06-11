/** -----------
 *  Imports
 * ------------ */
/** Helper function to UCfirst string */
import CapitalizeStr from "../helpers/capitaizeStr";

/** Material UI components */
import { Button, Container, Typography } from "@material-ui/core";

/** Extract information from GlobalStateProvider  */
import useGlobalState from "../hooks/useGlobalState";

/** Custom hook to handle the complete state of the form */
import useForm from "../hooks/useForm";

/** Function that performs field validation when pressing next / done */
import validationFn from "./StepForm/helpers/validationFn";

/** Initial values for form fields */
import initialFormValues from "./StepForm/data/initialFormValues";

/** Global css styles for the form, created with Material UI makeStyles */
import useStyles from "./StepForm/useStyles";

/** Navigation bar with title and back button */
import Navbar from "./StepForm/Navbar";

/** Components that render inputs from each specific step */
import Step0 from "./StepForm/Step0";
import Step1 from "./StepForm/Step1";
import Step2 from "./StepForm/Step2";
import Step3 from "./StepForm/Step3";
import Step4 from "./StepForm/Step4";
import { useEffect } from "react";

/** -----------
 * Component
 * ----------- */

export default function MultiStepForm() {
  /** Using general styles (That will also be reused in other components) */
  const classes = useStyles();

  /** Extract global state information for steps
   * @activeStep indicates the current step in which the user is browsing
   * @handleNextClick It is a function that allows you to advance to the
   *  next step, and performs the respective checks to make the advance correctly,
   *  for this it receives the formValues as an argument
   * @goToStep
   * Allows you to navigate to a specific step indicated as an argument
   */
  const { activeStep, handleNextClick, goToStep, goToBackStep } =
    useGlobalState();

  /**
   * The useForm hook returns a state that stores the form's values, another that
   * stores its errors and functions to control the submit, register inputs (add values
   * such as name, onChange, value, checked)
   */
  const {
    formValues,
    setFormValues,
    registerField,
    registerCheckbox,
    registerDatepicker,
    registerCustomInput,
    handleSubmit,
  } = useForm(initialFormValues);

  /** It calculates if the input "endDate" should be displayed, according to the input
   * (Switch) "isMultiDay" */
  const showEndDateInput = !!formValues.isMultiDay;

  /**
   *  submitFn is a function that will be executed when submitting the form, it acts in
   *  conjunction with the handleSubmit function that comes from the useForm hook
   */
  const submitFn = (formValues) => {
    handleNextClick(formValues);
  };

  /**  handleEditPersonalDataClick Function that will be executed when pressing the Edit Personal
   *   Data button. Redirect to initial step */

  const handleEditPersonalDataClick = () => {
    goToStep(0);
  };

  /** handleEditVehicleClick Function that will be executed when pressing the Edit Vehicle info button
   *   Sets the status that indicates that the visitor "will come by vehicle"
   *   to true and navigates to the step of editing vehicle information */

  const handleEditVehicleClick = () => {
    // Updating the state of the comesByCar form field

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      comesByCar: true,
    }));

    //  Navigate after a short period of time to observe that the switch is activated
    setTimeout(() => {
      goToStep(2);
    }, 250);
  };

  /** Navigate to edit vehicle data in case the option is activated
  "form -> comesByCar" without having previously entered them  */

  useEffect(() => {
    if (activeStep === 3 && formValues.comesByCar && !formValues.numberPlate) {
      goToBackStep();
    }
  }, [formValues.comesByCar, formValues.numberPlate, activeStep, goToBackStep]);

  //** Extract the first word of full name */
  const displayFirstName =
    formValues?.name?.trim()?.split(" ")?.length > 0
      ? formValues?.name?.trim()?.split(" ")[0]
      : "";

  /** This array will be used to call the text "title" according to the step it is
   *  in, linking the "active step" to the "index of each element of said array" */
  const titlesOrderedByStep = [
    "Datos de la visita",
    "Algunos datos más",
    "¿Que vehículo usa?",
    null,
    `!${CapitalizeStr(displayFirstName)} ya está listo!`,
  ];

  return (
    <>
      <Navbar formValues={formValues} />
      <Container style={{ maxWidth: 450 }}>
        <Typography
          className={classes.pageTitle}
          style={{ marginBottom: "2rem" }}
          variant="h1"
        >
          {titlesOrderedByStep[activeStep]}
        </Typography>

        {/* The main behavior will occur within this form */}
        <form onSubmit={handleSubmit(submitFn, validationFn(activeStep))}>
          {/* In step #0 render the inputs of the Step0 component */}
          {activeStep === 0 && (
            <Step0 registerField={registerField} classes={classes} />
          )}

          {/* In step #1 render the inputs of the Step1 component */}
          {activeStep === 1 && (
            <Step1
              registerCheckbox={registerCheckbox}
              registerDatepicker={registerDatepicker}
              classes={classes}
              showEndDateInput={showEndDateInput}
              registerField={registerField}
            />
          )}

          {/* In step #2 render the inputs of the Step2 component */}
          {activeStep === 2 && (
            <Step2
              registerCustomInput={registerCustomInput}
              classes={classes}
              registerField={registerField}
            />
          )}

          {/* In step #3 render the inputs of the Step3 component */}
          {activeStep === 3 && (
            <Step3
              formValues={formValues}
              handleEditPersonalDataClick={handleEditPersonalDataClick}
              handleEditVehicleClick={handleEditVehicleClick}
              registerCheckbox={registerCheckbox}
              classes={classes}
              registerCustomInput={registerCustomInput}
            />
          )}

          {/* In step #4 render the inputs of the Step4 component */}
          {activeStep === 4 && <Step4 />}

          {/* Submit button, changes its text and is displayed or not, according to the active step */}
          {activeStep < 4 && (
            <Button
              type="submit"
              className={classes.submitButton}
              color="primary"
              variant="contained"
              fullWidth
            >
              {activeStep === 3 ? "Listo" : "Siguiente"}
            </Button>
          )}
        </form>
      </Container>
    </>
  );
}

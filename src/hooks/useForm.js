/** -----------
 *  Imports
 * ------------ */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/** -----------
 *  Custom Hook
 * ------------ */
export default function useForm(initialFormValues) {
  /** Define an initial errors object, which will have the same keys as the initial
   * values and all its values will be null example: foor initial values { name: "abc", email: "abc@def.com" }
   * initial errors returned { name: null, email: null }
   *  */
  const initialFormErrors = Object.keys(initialFormValues).reduce((acc, cv) => {
    acc[cv] = null;
    return acc;
  }, {});

  /** State to store form fields */
  const [formValues, setFormValues] = useState(initialFormValues);

  /** State to store form errors */
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  /** Updates the state for a form field when a change is detected with the onChange event */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /** Updates the state for a form checkbox when a change is detected with the onChange event */
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  /** Updates the state for a form custom input (like DatePicker) when a change is detected with the onChange event */
  const handleCustomInputChange = (field) => (date) => {
    setFormValues({ ...formValues, [field]: date });
  };

  /** Updates the state for a DatePicker when a change is detected with the onChange event */
  /** TODO: Delete this function, use handleCustomInputChange */
  const handleDatepickerChange = (field) => (date) => {
    setFormValues({ ...formValues, [field]: date });
  };

  /** This function will return an object that will contain the necessary attributes (name, value, onChange) to control an input */
  const registerField = (field) => ({
    name: field,
    value: formValues[field],
    onChange: handleInputChange,
  });

  /** This function will return an object that will contain the necessary attributes (name, checked, onChange) to control a checkbox */
  const registerCheckbox = (field) => ({
    name: field,
    checked: formValues[field],
    onChange: handleCheckboxChange,
  });

  /** This function will return an object that will contain the necessary attributes (name, value, onChange) to control a  Mui Datepicker */
  const registerDatepicker = (field) => ({
    name: field,
    value: formValues[field],
    onChange: handleDatepickerChange(field),
  });

  /** This function will return an object that will contain the necessary attributes (name, value, onChange) to control a custom input created by the team */
  const registerCustomInput = (field) => ({
    name: field,
    value: formValues[field],
    onChange: handleCustomInputChange(field),
  });

  /** Clenan the form errors or set with a new value */
  const resetFormErrors = (value) => {
    setFormErrors(value || initialFormErrors);
  };

  /**
   * This "handleSubmit" function will receive as an argument a submit function
   * (What must be executed when submitting, if applicable) and a validation function
   * (Which returns an error object that can be empty or with messages in case there is one or more mistakes)
   *
   * The value that returns is a new function, which will finally be the one that a form will use to bind its submit
   * event, such as: onSubmit = {handleSubmit (submitFn, validationFn)}
   *
   */

  const handleSubmit = (submitFn, validationFn) => {
    return (e) => {
      e.preventDefault();

      /** It only performs the validation if any validationFn was sent */
      if (validationFn) {
        const validationErrors = validationFn(formValues);

        /** If there is at least one error, update the formErrors status with these new error messages */
        const validationHasErrors = Object.keys(validationErrors).length > 0;
        if (validationHasErrors) return setFormErrors(validationErrors);
      }

      resetFormErrors();

      /** It only performs the submit if any submitFn was sent */
      if (submitFn) submitFn(formValues);
    };
  };

  /** Every time the formErrors status is updated with at least one error message,
   * it will be shown on the screen by means of a toast */
  useEffect(() => {
    for (const key in formErrors) {
      const errorMessage = formErrors[key];
      if (errorMessage) {
        toast.error(errorMessage, {
          position: "top-center",
        });
      }
    }
  }, [formErrors]);

  /** Return data for using */
  return {
    formValues,
    formErrors,
    handleInputChange,
    handleSubmit,
    handleDatepickerChange,
    handleCustomInputChange,
    registerField,
    registerCheckbox,
    registerDatepicker,
    registerCustomInput,
    setFormValues,
  };
}

/**
 * Validation function used in conjunction with
 * the useForm hook, @validationFn receives the activeStep (In Component) and creates a new
 * function that will receive the @formValues (In hook useForm) from the component, and with this
 * information (activeStep and formValues) discriminate whether to go to the
 * next step, send the form or show some message of mistake
 *
 * Example of use
 *
 * In Component
 * <form onSubmit={handleSubmit(submitFn, validationFn(activeStep))}>
 *
 */

const validationFn = (activeStep) => (formValues) => {
  /** Object that will temporarily store (In this scope) the validation errors */
  let errors = {};

  switch (activeStep) {
    /** Validate when advancing from step 0 to the next */
    case 0:
      const nameIsEmpty = formValues.name.trim() === "";
      const nameHasAtLeastTwoWords =
        formValues.name.trim().split(" ").length < 2;
      const nameHasOnlyAZChars = /^[A-Z]+$/i.test(
        formValues.name.split(" ").join("").trim()
      );

      if (nameIsEmpty) errors.name = "Por favor ingresa nombre y apellido";
      else if (!nameHasOnlyAZChars)
        errors.name = "Ingresa nombre y apellido válidos";
      else if (nameHasAtLeastTwoWords)
        errors.name = "Debes ingresar el nombre completo";

      if (
        formValues.document.trim() === "" ||
        !parseFloat(formValues.document.trim())
      )
        errors.document = "Debe agregar un DNI válido";
      break;

    /** Validate when advancing from step 1 to the next */
    case 1:
      if (formValues.isMultiDay && formValues.endDate < formValues.startDate)
        errors.endDate =
          "La visita debe terminar el mismo día o algun día siguiente";
      break;

    /** Validate when advancing from step 2 to the next */
    case 2:
      const plateIsEmpty = formValues.numberPlate.trim() === "";
      if (plateIsEmpty)
        errors.numberPlate = "Por favor ingresa una matrícula válida";
      break;

    default:
      break;
  }

  return errors;
};

export default validationFn;

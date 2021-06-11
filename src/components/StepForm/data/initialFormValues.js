/** Initial values for the MultiStepForm fields state */

const initialFormValues = {
  /** Step #0 group inputs */
  name: "",
  document: "",
  /** Step #1 group inputs */
  isMultiDay: false,
  startDate: new Date(),
  endDate: new Date(),
  typeOfVisit: "social",
  comesByCar: true,
  /** Step #2 group inputs */
  type: "social",
  vehicleType: "car",
  numberPlate: "",
  /** Step #3 group inputs */
  hasCompanions: true,
  numberOfCompanions: 1,
  isFavorite: false,
  /** Step #4 doesn't inputs */
};

export default initialFormValues;

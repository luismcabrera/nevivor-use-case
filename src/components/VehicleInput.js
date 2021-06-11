/** -----------
 *  Imports
 * ------------ */
/** Material UI components */
import { Grid } from "@material-ui/core";

/** Custom component load a button with vehicle icon */
import VehicleButton from "./StepForm/VehicleButton";

/** -----------
 *  Component
 * ------------ */
/** Similar a multiple radio button input, Select between three values by
 *  clicking on any of them, the current value is read in value, and the
 *  new value is passed as a parameter to the function that receives in the onChange prop
 *
 * With this we can call this component like this <VehicleInput value={value} onChange={(newValue) => setValue(newValue) }/>
 *
 * */

export default function VehicleInput({ value, onChange: handleChange }) {
  const vehicleTypes = ["car", "bike", "motorcycle"];

  return (
    <Grid container spacing={2}>
      {vehicleTypes.map((vehicleType, index) => (
        <Grid item xs={4} key={index}>
          <VehicleButton
            type={vehicleType}
            active={value === vehicleType}
            onClick={() => handleChange(vehicleType)}
            fullWidth
          />
        </Grid>
      ))}
    </Grid>
  );
}

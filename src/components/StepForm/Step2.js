/** -----------
 *  Imports
 * ------------ */

/** Custom TexField Component */
import TextField from "../TextField";

/** Custom input type "Multiple Radio Selector" Component */
import VehicleInput from "../VehicleInput";

/** -----------
 *  Component
 * ------------ */
export default function Step2({ registerCustomInput, classes, registerField }) {
  return (
    <>
      {/* Rendered selector with 3 button for select with click some */}
      <VehicleInput {...registerCustomInput("vehicleType")} />

      {/* Rendered input field */}
      <TextField
        label="Matrícula"
        placeholder="ABC123"
        variant="outlined"
        style={{ marginTop: "8vh" }}
        // Return object with attributes name, value, onChange
        {...registerField("numberPlate")}
      />
    </>
  );
}

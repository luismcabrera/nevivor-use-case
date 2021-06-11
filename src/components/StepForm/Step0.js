/** -----------
 *  Imports
 * ------------ */

/** Custom TextField Component  */
import TextField from "../TextField";

/** -----------
 *  Component
 * ------------ */

export default function Step0({ registerField }) {
  return (
    <>
      {/* TextField rendered a input type text */}
      <TextField
        label="Nombre y apellido"
        variant="outlined"
        style={{ marginBottom: "3vh" }}
        placeholder="Luis Cabrera"
        // registetrField return object config { name: ..., value: ..., onChange: ...}
        {...registerField("name")}
      />

      {/* TextField rendered a input type text */}
      <TextField
        label="DNI"
        variant="outlined"
        placeholder="99999999"
        type="number"
        // registetrField return object config { name: ..., value: ..., onChange: ...}
        {...registerField("document")}
      />
    </>
  );
}

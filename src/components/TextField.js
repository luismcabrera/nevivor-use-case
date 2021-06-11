/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */
import { makeStyles, TextField as MuiTextField } from "@material-ui/core";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  input: {
    height: 40,
  },
  label: {
    marginTop: -6,
  },
}));

/** -----------
 *  Component
 * ------------ */
/** Custom TextField with new Styles */

export default function TextField({ InputProps, ...restProps }) {
  const classes = useStyles();
  return (
    <MuiTextField
      variant="outlined"
      label="text"
      InputProps={{
        className: classes.input,
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.label,
      }}
      margin="normal"
      fullWidth
      {...restProps}
    />
  );
}

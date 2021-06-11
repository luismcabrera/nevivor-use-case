/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */
import { makeStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  // datePicker: {},
  input: {
    height: 40,
    padding: 0,
  },
  label: {
    marginTop: -6,
  },
}));

/** -----------
 *  Component
 * ------------ */
/** This is a custom date picker with some styles */
export default function CustomDatePicker({ label, ...restProps }) {
  const classes = useStyles();

  return (
    <KeyboardDatePicker
      className={classes.datePicker}
      label={label}
      format="dd/MM/yyyy"
      variant="inline"
      inputVariant="outlined"
      disablePast={true}
      InputProps={{
        className: classes.input,
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.label,
      }}
      {...restProps}
      fullWidth
    />
  );
}

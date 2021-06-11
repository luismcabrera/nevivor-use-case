/** -----------
 *  Imports
 * ------------ */

/** Material UI Components */
import {
  FormControl,
  makeStyles,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  selector: {},
}));

/** -----------
 *  Component
 * ------------ */
export default function Select({ children, ...restProps }) {
  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined" className={classes.selector}>
      <InputLabel>Tipo de visita</InputLabel>
      <MuiSelect label="Tipo de visita" defaultValue="asd" {...restProps}>
        {children}
      </MuiSelect>
    </FormControl>
  );
}

Select.Option = ({ children, ...restProps }) => {
  <MenuItem {...restProps}>{children}</MenuItem>;
};

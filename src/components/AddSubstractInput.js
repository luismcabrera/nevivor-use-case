/** -----------
 *  Imports
 * ------------ */

/** Material UI Components */
import { Box, IconButton, makeStyles } from "@material-ui/core";

/** Icons  */
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  control: {
    width: "2.25rem",
    height: "2.25rem",
    backgroundColor: "white",
    borderRadius: "1rem",
    boxShadow: "2px 2px 10px rgba(0,0,0, .5)",
  },
  controlIcon: {
    fill: "black",
  },
  value: {
    boxShadow: ".5px 2px 5px rgba(0,0,0, .5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.5rem",
    height: "2.5rem",
  },
}));

/** -----------
 *  Component
 * ------------ */

/** This component receives a @value , @onChange function, @min and @max parameters  */
// Clicking on this button inverts the Boolean value

/** Use Example */
// <AddSubstractInput value={companions} onChange={(newCompanions) => setCompanions(newCompanions)} min={1} max={10}/>

// Or with useForm
// <AddSubstractInput {...register("companions")}/>

export default function AddSubstractInput({
  value,
  onChange: handleChange,
  min,
  max,
}) {
  const classes = useStyles();
  const isDisabledDecrement = value <= min;
  const isDisabledIncrement = value >= max;

  const handleDecrement = () => {
    if (isDisabledDecrement) return;
    handleChange(value - 1);
  };

  const handleIncrement = () => {
    if (isDisabledIncrement) return;
    handleChange(value + 1);
  };

  return (
    <Box display="flex" alignItems="center">
      {/* Substract 1 Button */}
      <IconButton
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={handleDecrement}
        disabled={isDisabledDecrement}
        className={classes.control}
      >
        <RemoveIcon className={classes.controlIcon} />
      </IconButton>

      {/* Show Value */}
      <div
        variant="contained"
        style={{ marginRight: "1rem" }}
        className={classes.value}
      >
        {value}
      </div>

      {/* Add 1 Button */}
      <IconButton
        variant="contained"
        onClick={handleIncrement}
        disabled={isDisabledIncrement}
        className={classes.control}
      >
        <AddIcon className={classes.controlIcon} />
      </IconButton>
    </Box>
  );
}

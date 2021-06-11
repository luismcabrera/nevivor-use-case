/** -----------
 *  Imports
 * ------------ */

/** Material UI components */
import { IconButton, makeStyles } from "@material-ui/core";

/** Icons */
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

/** -----------
 *  Styles
 * ------------ */

const useStyles = makeStyles((theme) => ({
  starIcon: {
    fill: "#FFB833",
    fontSize: "2rem",
  },
}));

/** -----------
 *  Component
 * ------------ */

/** This component receives a @value and an @onChange function */
// Clicking on this button inverts the Boolean value

/** Use Example */
// <FavoriteStarInput value={isFavorite} onChange={(newIsFavoriteValue) => setIsFavorite(newIsFavoriteValue)}/>

// Or with useForm
// <FavoriteStarInput {...register("isFavorite")}/>

export default function FavoriteStarInput({ value, onChange: handleChange }) {
  const classes = useStyles();
  /** Depending on the value, the filled star or only the border will be displayed */
  
  const Icon = value ? StarIcon : StarBorderIcon;
  return (
    <IconButton onClick={() => handleChange(!value)}>
      <Icon className={classes.starIcon} />
    </IconButton>
  );
}

/** -----------
 *  Imports
 * ------------ */
/** Custom Hook to consume the global state offered by the active step and functions to update it */
import useGlobalState from "../../hooks/useGlobalState";

/** Material UI Components */
import {
  AppBar,
  IconButton,
  LinearProgress,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

/** Icons */
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  navbar: {
    letterSpacing: "1px",
    boxShadow: "0px -15px 20px 7px black",
  },
  iconButton: {
    marginLeft: "-1rem",
  },
  progressBar: {
    height: "1rem",
  },
  progressBarColorPrimary: {
    backgroundColor: "transparent",
  },
  colorSecondary: {
    backgroundColor: "yellow !important",
  },
  progressBarColor: {
    backgroundImage:
      "linear-gradient( to bottom, rgba(0,0,0,.4) 0%, transparent 25% )",
  },
  // progressBarColorSecondary: {
  //   backgroundColor: "yellow !important",
  // },
}));

/** -----------
 *  Component
 * ------------ */
export default function Navbar({ formValues }) {
  const classes = useStyles();

  /** Consuming utilities to handle the activeStep from the global state */
  const { activeStep, lastStep, handleBackClick } = useGlobalState();
  const progressPercentage = ((activeStep + 1) / (lastStep + 1)) * 100;

  return (
    /** Will render two rows */
    <div className={classes.container}>
      {/* The first row with a navigation bar that will indicate a title and a button to go back */}
      <AppBar className={classes.navbar} color="secondary" position="static">
        <Toolbar>
          {/* Go to Back Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => handleBackClick(formValues)}
            className={classes.iconButton}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          {/* Navbar Title */}
          <Typography variant="h6">Registrar Visita</Typography>
        </Toolbar>
      </AppBar>

      {/* The second row with a progress bar that will tell the user how close they are to finishing */}
      {/* It will not be shown in the last step, in the others it will */}
      {activeStep < lastStep && (
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          color="primary"
          className={classes.progressBar}
          classes={{
            colorPrimary: classes.progressBarColorPrimary,
            barColorPrimary: classes.progressBarColor,
          }}
        />
      )}
    </div>
  );
}

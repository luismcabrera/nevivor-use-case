/** -----------
 *  Imports
 * ------------ */
/** Material UI components */
import { Button, makeStyles } from "@material-ui/core";
/** Classnames module to easily manipulate classes that load conditionally */
import cn from "classnames";

/** Icons */
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  vehicleButton: {
    borderRadius: "5px",
    border: "1px solid black",
  },
  vehicleButtonFullWidth: {
    width: "100%",
  },
  vehicleButtonSmall: {
    backgroundColor: "red",
    width: "2rem",
  },
  vehicleButtonActive: {
    backgroundColor: "#3bbfad !important",
    borderColor: "#35ac9b",
  },
  icon: {
    fontSize: "max(5vw, 65px) !important",
    maxWidth: "100px",
  },
  iconSmall: {
    fontSize: "1.75rem !important",
    maxWidth: "100%",
  },
}));

/** Icon component according to the type indicated in the component props1  */
const icons = {
  car: DriveEtaIcon,
  bike: DirectionsBikeIcon,
  motorcycle: MotorcycleIcon,
};

/** -----------
 *  Component
 * ------------ */
export default function VehicleButton({
  type,
  fullWidth,
  active,
  small,
  className: externalClassName,
  ...restProps
}) {
  const classes = useStyles();

  /** Select an icon from Icon Object */
  const Icon = icons[type];

  return (
    <Button
      /* These classes load conditionally according to the specified attribute,
       * for example vehicleButtonActive will be shown if the active property is trutly */
      className={cn(classes.vehicleButton, {
        [classes.vehicleButtonActive]: active,
        [classes.vehicleButtonSmall]: small,
        [classes.vehicleButtonFullWidth]: fullWidth,
        [externalClassName]: externalClassName,
      })}
      {...restProps}
    >
      {/* Here also classes are loaded conditionally */}
      <Icon className={cn(classes.icon, { [classes.iconSmall]: small })} />
    </Button>
  );
}

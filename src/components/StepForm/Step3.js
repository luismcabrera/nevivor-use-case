/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */
import { Box, Grid, IconButton, Switch, Typography } from "@material-ui/core";

//** Icons */
import EditIcon from "@material-ui/icons/Edit";

/** Custom Button with icon of a car, bike or motorcycle */
import VehicleButton from "./VehicleButton";
import FavoriteStarInput from "../FavoriteStarInput";
import AddSubstractInput from "../AddSubstractInput";

export default function Step3({
  formValues,
  handleEditPersonalDataClick,
  handleEditVehicleClick,
  registerCheckbox,
  classes,
  registerCustomInput,
}) {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          {/* Check Personal Data Section */}
          <Typography variant="h6" style={{ fontWeight: "600", textTransform: "capitalize" }} >
            {formValues.name}
          </Typography>
          <Typography variant="subtitle2">DNI</Typography>
          <Typography variant="subtitle2">{formValues.document}</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <IconButton onClick={handleEditPersonalDataClick}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Check Vehicle Switch  Section*/}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="3vh"
      >
        <Typography variant="h6">Vehículo</Typography>

        <Switch
          color="primary"
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          // returns an object with name, checked, onChange
          {...registerCheckbox("comesByCar")}
        />
      </Box>

      {/* Comes By Car Switch */}
      {formValues.comesByCar && (
        <Box display="flex" justifyContent="space-between">
          <VehicleButton
            type={formValues.vehicleType}
            active={true}
            small={true}
            style={{ marginRight: "1rem" }}
            onClick={handleEditVehicleClick}
          />
          <Box flex={1}>
            <p>Matrícula</p>
            <p>{formValues.numberPlate}</p>
          </Box>
          <IconButton onClick={handleEditVehicleClick}>
            <EditIcon />
          </IconButton>
        </Box>
      )}

      {/* Companions Switch Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="3vh"
      >
        <Typography variant="h6">Acompañantes</Typography>

        <Switch
          color="primary"
          {...registerCheckbox("hasCompanions")}
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
        />
      </Box>

      {/* Number Companions Buttons Section */}
      {formValues.hasCompanions && (
        <AddSubstractInput
          min={1}
          max={10}
          {...registerCustomInput("numberOfCompanions")}
        />
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="6vh"
      >
        <Typography variant="h6">Recordar en favoritos</Typography>

        {/* Add or remove to favorites */}
        <FavoriteStarInput {...registerCustomInput("isFavorite")} />
      </Box>
    </>
  );
}

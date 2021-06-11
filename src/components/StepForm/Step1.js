/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */
import {
  Grid,
  Box,
  MenuItem,
  Switch,
  Typography,
  // makeStyles,
} from "@material-ui/core";
import CustomDatePicker from "../CustomDatePicker";
// import { KeyboardDatePicker } from "@material-ui/pickers";

/** Custom textField */
import TextField from "../TextField";

/** -----------
 *  Component
 * ------------ */
export default function Step1({
  registerField,
  registerCheckbox,
  registerDatepicker,
  classes,
  showEndDateInput,
}) {
  return (
    <>
      {/* isMultiDay Input Section  */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="4vh"
      >
        <Typography variant="caption">Visita de varios días</Typography>
        <Switch
          color="primary"
          {...registerCheckbox("isMultiDay")}
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
        />
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "2.5vh" }}>
        <Grid item xs={showEndDateInput ? 6 : 12}>
          {/* Date input for start date (day)  */}
          <CustomDatePicker
            label="Día de inicio"
            {...registerDatepicker("startDate")}
          />
        </Grid>
        {showEndDateInput && (
          <Grid item xs={6}>
            {/* Date input for end date  */}
            {/* if isMultiDay is true end date (day) Input Section is visible  */}
            <CustomDatePicker
              label="Día de fin"
              {...registerDatepicker("endDate")}
            />
          </Grid>
        )}
      </Grid>

      {/* Selector type of visit "social, work, "emergency" */}
      <TextField
        select
        label="Tipo de visita"
        {...registerField("type")}
        style={{ marginBottom: "4vh" }}
      >
        <MenuItem value="social">Social</MenuItem>
        <MenuItem value="work">Trabajo</MenuItem>
        <MenuItem value="emergency">Emergencia</MenuItem>
      </TextField>

      {/* Section Switch Input Comes in Vehicle */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" className="come-in-vehicle">
          ¿Viene en coche?
        </Typography>
        <Switch
          color="primary"
          {...registerCheckbox("comesByCar")}
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
        />
      </Box>
    </>
  );
}

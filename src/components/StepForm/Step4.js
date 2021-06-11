/** -----------
 *  Imports
 * ------------ */

/** Material UI Components */
import { Box, Grid, Typography } from "@material-ui/core";

/* QRCode return a image */
import QRCode from "../QRCode";

/* ShareLinks return three buttons */
import ShareLinks from "../ShareLinks";

export default function Step4() {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Box marginBottom="2rem" width="85%" maxWidth="70vw" marginX="auto">
          <Typography
            align="center"
            style={{
              fontWeight: "500",
              fontSize: "1rem",
              color: "#66696d",
            }}
          >
            Necesitará este codigo para poder ingresar al condominio, recuerda
            enviarlo
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <QRCode />
      </Grid>
      <Grid item xs={12}>
        <Box maxWidth="50%" marginX="auto">
          <ShareLinks />
        </Box>
      </Grid>
    </Grid>
  );
}

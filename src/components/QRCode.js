/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */

import { makeStyles } from "@material-ui/core";

/** Fake Data */
const QRImage = "/img/qr-code.png";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));

/** -----------
 *  Component
 * ------------ */
/** Simply render the image of a QR code */
export default function QRCode() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={QRImage} alt="qr-code" className={classes.img} />
    </div>
  );
}

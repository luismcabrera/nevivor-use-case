/** -----------
 *  Imports
 * ------------ */
/** Material UI Components */
import { IconButton, makeStyles } from "@material-ui/core";

/** Icons */
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GetAppIcon from "@material-ui/icons/GetApp";
import DraftsIcon from "@material-ui/icons/Drafts";

/** -----------
 *  Styles
 * ------------ */
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "5.5vh",
  },
  icon: {
    color: "black",
    transform: "scale(1.3)",
  },
  onlyMobile: {
    [theme.breakpoints.up("650")]: {
      display: "none",
    },
  },
}));

/** Fake data QR Code URL Image */
const QRCodeURL =
  "https://images-na.ssl-images-amazon.com/images/I/41c9F9wvYIL.png";

/** -----------
 *  Component
 * ------------ */
/** Render three buttons each one can share in a specific way */
export default function ShareLinks() {
  const classes = useStyles();

  const handleSendInEmailClick = () => {
    window.location.href = `mailto:?subject=QRCode&body=${`QRCode url`}`;
  };

  const handleDownloadClick = () => {
    const imageURL = "/img/qr-code.png";
    let downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "visit-qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleShareInWhatsappClick = () => {
    window.href = `whatsapp://send?text=${QRCodeURL}`;
  };

  return (
    <div className={classes.container}>
      <IconButton
        onClick={handleShareInWhatsappClick}
        className={classes.onlyMobile}
      >
        <WhatsAppIcon fontSize="large" className={classes.icon} />
      </IconButton>

      <IconButton onClick={handleDownloadClick}>
        <GetAppIcon fontSize="large" className={classes.icon} />
      </IconButton>

      <IconButton onClick={handleSendInEmailClick}>
        <DraftsIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </div>
  );
}

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    letterSpacing: "1.5px",
    fontWeight: 600,
    marginTop: "calc(1rem + 1vh)",
    marginBottom: "3vh",
    fontSize: "calc(1.5rem + 1vh)",
    color: "#4b4f54",
    textAlign: "center",
  },
  submitButton: {
    position: "fixed",
    bottom: "2.5rem",
    left: "50%",
    width: "calc(100vw - 2rem)",
    maxWidth: "396px",
    transform: "translateX(-50%)",
  },
  root: {
    width: 56,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(28px)",
      color: "white",
      "& + $track": {
        backgroundColor: "#3bbfad",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#707070",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    boxShadow: "0px 3px 3px 1px #dedede",
    backgroundColor: "#707070",
    borderRadius: "100px",
    marginTop: "1.5px",
    marginLeft: "2px",
    height: 24,
    opacity: 1,
  },
  cssLabel: {
    marginTop: "-6px",
  },
  checked: {},
  focusVisible: {},

  select: {
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    display: "table-cell",
    verticalAlign: "middle",
  },
}));

export default useStyles;

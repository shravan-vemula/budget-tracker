import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "theme";
import BtrackerLogo from "images/Btracker.png";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  base: {
    marginLeft: "100px",
    paddingTop: "5px",
    width: "300px",
    height: "38px",
    fontSize: "32px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    fontFamily: myTheme.typography.fontFamily.default,
  },
}));

const Title = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.base}
      className={classes.title}
      style={{ paddingLeft: "80px" }}
    >
      <div id="logo" className="logoBtracker">
        <img src={BtrackerLogo} className="BtrackerIcon" />
      </div>
    </div>
  );
};
export default Title;

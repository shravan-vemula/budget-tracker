import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    pertext: {
    width: "39px",
    height: "22px",
    fontFamily: "Inter,sans-serif",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    color: "#5e6c84",
  },
}));

const Pertext = (props) => {
  const classes = useStyles();
  return (
    <div  className={classes.pertext} >
          <p>{props.value}</p>
      </div>
  );
};

export default Pertext;

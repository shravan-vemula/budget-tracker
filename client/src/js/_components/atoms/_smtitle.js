import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  smtitle: {
    
    width: "70px",
    height: "30px",
    fontFamily: "Inter,sans-serif",
    fontSize: "20px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: "#5e6c84"
  },
}));

const Smtitle = (props) => {
  const classes = useStyles();
  return (
    <div  className={classes.smtitle} >
        {props.title}
      </div>
  );
};

export default Smtitle;

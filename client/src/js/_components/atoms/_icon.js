import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imgloc from 'images/piggy-bank-24-px.svg';


const useStyles = makeStyles(() => ({
   icon: {
    width: "32px",
    height: "32px",
    borderRadius: "32px",
    backgroundColor:"#eaf0f6",
    align: "center"   
    },
  
  imgholder: {
      width: "22px",
      height: "22px",
      objectFit: "contain",
      padding:"5px"
  }
}));

const Icon = () => {
  const classes = useStyles();
  return (
    <div className={classes.icon} >
          <img src={imgloc} className={classes.imgholder} />
      </div>
  );
};

export default Icon;

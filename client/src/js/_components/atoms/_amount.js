import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  amount: {
    padding: "7%",
    width: "147px",
    height: "50px",
    fontFamily: "Inter,sans-serif",
    fontSize: "30px",
    fontWeight: "bold",
    lineHeight: "1.39",
    letterSpacing: "normal",
    color: "#344563",
    marginRight: "12%",
    marginTop: "2%"
  },
  rupee:{
    fontSize: "80%",
    marginRight: "5%"
  }
}));

const Amount = (props) => {
  const classes = useStyles();
  return (
    <div  className={classes.amount} >
          <p><span className={classes.rupee}>₹</span>{props.value}</p>
      </div>
  );
};

export default Amount;

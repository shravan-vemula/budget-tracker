import React from "react";
import Image from "images/coming-soon.png";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { myTheme } from "theme";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft:'auto',
    marginRight:'auto',
    fontFamily: myTheme.typography.fontFamily.default,
    color: myTheme.palette.default.main,
  },
  heading: {
    fontSize:'30px',
    letterSpacing: "20px",
  },
}));

function ComingSoon() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      <Grid item>
        <img src={Image} />
      </Grid>
      <Grid item>
        <Typography className={classes.heading}>COMING SOON</Typography>
      </Grid>
    </Grid>
  );
}

export default ComingSoon;

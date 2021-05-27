import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Title from "js/_components/atoms/Title";
import HeaderIcons from "js/_components/molecules/HeaderIcons";

const useStyles = makeStyles((theme) => ({
 
  title: {
    flexGrow: 1,
  },
}));

export default function HomePageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Title />
          <HeaderIcons />
        </Toolbar>
      </AppBar>
    </div>
  );
}

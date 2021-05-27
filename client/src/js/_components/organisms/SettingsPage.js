import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import AvatarIcon from "../atoms/AvatarIcon";
import Grid from "@material-ui/core/Grid";
import SettingsSideBar from "js/_components/organisms/SettingsSideBar";
import SettingsHeader from "js/_components/organisms/SettingsHeader";
import auth from "js/auth/initAuth";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  base: {
    boxShadow: "0 2px 0 0 #eaedf3",
    backgroundColor: "#ffffff",
  },
  Alignment: {
    textAlign: "left",
  },
}));

export default function SettingsPage(props) {
  const classes = useStyles();
  console.log(props.id,"in settings")

  if(!auth.loggedIn()){
    return <Redirect to="/login" />
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <SettingsHeader />
            <AvatarIcon props={{ spacing: 50 }} />
          </Toolbar>
        </AppBar>
        <div>

          <SettingsSideBar id={props.id}/>
        </div>
      </Grid>
    </div>
  );
}

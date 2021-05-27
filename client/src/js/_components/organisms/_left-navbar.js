import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "js/_components/molecules/_menu-list-items";

import { Route, Switch, Redirect } from "react-router-dom";
import MenuIcon from "js/_components/atoms/_menu-icon";
import Overview from "js/_components/organisms/_overview";
import BudgetDashboard from "js/_components/templates/_budget-dashboard";

import { myTheme } from "theme";
import HomePageHeader from "./HomePageHeader";
import AccountsPage from "./AccountsPage";
import auth from 'js/auth/initAuth';
import ComingSoon from "../molecules/_coming-soon";


const drawerWidth = 86;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:myTheme.palette.background.default,
    // height:'950px',
    width:'100%',
   
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuItems: {
    marginTop: "96px",
  },
}));

const LeftNavBar = () => {
  const classes = useStyles();
  
  if(!auth.loggedIn()){
    return <Redirect to="/" />
  }


  return (
    <div className={classes.root}>
      <HomePageHeader />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <MenuIcon />
        <div className={classes.menuItems}>
          <MenuItemsList />
        </div>
      </Drawer>
      <>
        <Switch>
        <Route exact path="/home/accounts">
            <AccountsPage />
          </Route>
          <Route exact path="/home/income">
            <ComingSoon />
          </Route>
          <Route exact path="/home/expenses">
              <ComingSoon />
          </Route>
          <Route exact path="/home/budget">
          <BudgetDashboard />
          </Route>
          <Route path="/home/overview">
          <Overview />
          </Route>
        </Switch>
      </>
    </div>
  );
};

export default LeftNavBar;


import React from "react";
import { Route,Switch } from "react-router-dom";
import LeftNavBar from "js/_components/organisms/_left-navbar";
import BankSelection from "js/_components/organisms/BankSelection";
import FormLayout from "js/_components/organisms/FormLayout";

import AccountsPage from "js/_components/organisms/AccountsPage";

import SettingsPage from "/js/_components/organisms/SettingsPage";

import SignIn from "js/_components/organisms/Signin";




export default function Routes(props) {
  console.log(props,"in routes")
  return (
    <>
      <Switch>
      <Route path="/" exact component={FormLayout} />
      <Route path="/login" component={SignIn} />
      <Route path="/SelectBank" ><BankSelection id={props.id} setId={ props.setId }/></Route>
      <Route path="/home" component={LeftNavBar}></Route>
      <Route path="/home/accounts" component={AccountsPage}></Route>
      <Route path={"/settings"}>
        <SettingsPage id={props.id} />
      </Route>

      </Switch>
    </>
  );
}

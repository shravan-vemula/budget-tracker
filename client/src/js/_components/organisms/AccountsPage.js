import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import AccordionForAccounts from "../molecules/AccordionForAccounts";
import { myTheme } from "theme";

const useStyles = makeStyles((theme) => ({
  accountsDisplay: {
    width: "80%",
    marginLeft: "6%",
    marginRight:"auto",
    marginTop: "5%",
    fontFamily: myTheme.typography.fontFamily.default + "!important",
  },
  titleDisplay: {
    fontSize: "30px",
    fontStyle: "normal",
    fontFamily: "Inter,sans-serif",
    fontWeight: "normal",
    lineHeight: "1.47",
    fontStretch: "normal",
    letterSpacing: "normal",
    backgroundColor:"#fafafa"
  },
}));

function AccountsPage() {
  const classes = useStyles(myTheme);
  return (
    <>
      <div id="account-overiview" className={classes.accountsDisplay}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={0}>
              {" "}
              <h1 className={classes.titleDisplay}>Accounts</h1>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <AccordionForAccounts />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AccountsPage;

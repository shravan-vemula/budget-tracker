import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { myTheme } from "theme";
import Typography from "@material-ui/core/Typography";
import { userGeneralNotification } from "js/services/UserServices";
import COLORS from "js/utils/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  spacing: {
    paddingLeft: "300px",
  },
  innerFormControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  notificationsPadding: {
    paddingTop: "20px",
  },
  InputField: {
    color: COLORS.hexgrey,
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize: "18px",
  },
  wrapper: {
    fontFamily: myTheme.typography.fontFamily.default,
  }
}));

export default function GeneralNotifications(props) {
  console.log(props.id,"in snttings")
  useEffect(() => {
    async function innerFunction() {
      const response = await userGeneralNotification(props.id);
      props.setNotifyExceededExpense(response.data.notifyExceededExpense);
      props.setNewBill(response.data.newBillAdded);
      props.setMoneyTransaction(response.data.transactionsInAccount);
      props.setExceedingGoalPeriod(response.data.notifyExceedGoalPeriod);
      props.setReachGoal(response.data.notifyWhenGoalReached);
      props.setRecurringDueExpenses(response.data.recurringExpensesDue);
      props.setManageUncategorized(response.data.manageUncategorized);
      props.setEmail(response.data.email);
      props.setTextMessages(response.data.textMessages);
    }
    innerFunction();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="form1">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={6}>
          <FormControl component="fieldset" className={classes.FormControl}>
            <FormLabel
              style={{
                fontSize: "14px",
                fontFamily: myTheme.typography.fontFamily.default,
                paddingBottom: "10px",
                color:COLORS.settingsColor
              }}
            >
              NOTIFICATIONS
            </FormLabel>
            <FormGroup aria-label="position" row>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft:'10.9rem' }}>
                      <Checkbox
                        className={classes.checkbox}
                        color="primary"
                        checked={props.notifyExceededExpense}
                        onClick={() => {
                          props.setNotifyExceededExpense(!props.notifyExceededExpense);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when expense exceeds 70%
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "18.9rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.newBill}
                        onClick={() => {
                          props.setNewBill(!props.newBill);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      When new bill is added
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "8.55rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.moneyTransaction}
                        onClick={() => {
                          props.setMoneyTransaction(!props.moneyTransaction);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Amount debited/credited from bank account
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "6.85rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.exceedingGoalPeriod}
                        onClick={() => {
                          props.setExceedingGoalPeriod(!props.exceedingGoalPeriod);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when I am exceeding the goal period
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "14.7rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.reachGoal}
                        onClick={() => {
                          props.setReachGoal(!props.reachGoal);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when I reach my goal
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "18.36rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.recurringDueExpenses}
                        onClick={() => {
                          props.setRecurringDueExpenses(!props.recurringDueExpenses);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Recurring expenses due
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "19.18rem" }}>
                      <Checkbox
                        color="primary"
                        checked={props.manageUncategorized}
                        onClick={() => {
                          props.setManageUncategorized(!props.manageUncategorized);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Manage uncategorized
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <FormHelperText
                className={classes.InputField}
                style={{
                  fontFamily: myTheme.typography.fontFamily.default,
                  fontSize: "12px",
                }}
              >
                to add missing categories to expenses and income
              </FormHelperText>
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset" className={classes.FormControl}>
            <FormLabel
              style={{
                fontSize: "14px",
                paddingBottom: "10px",
                fontFamily: myTheme.typography.fontFamily.default,
                color:COLORS.settingsColor
              }}
            >
              MESSAGES
            </FormLabel>
            <FormGroup aria-label="position" row>
              <Grid item xs={12}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      size='small'
                      checked={props.email}
                      onClick={() => {
                        props.setEmail(!props.email);
                      }}
                    />
                  }
                  label={
                    <Typography className={classes.InputField} style={{fontSize:'14px'}}>
                      Email
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      size='small'
                      checked={props.textMessages}
                      onClick={() => {
                        props.setTextMessages(!props.textMessages);
                      }}
                    />
                  }
                  label={
                    <Typography className={classes.InputField} style={{fontSize:'14px'}}>
                      Text messages
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
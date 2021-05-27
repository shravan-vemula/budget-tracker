import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GeneralSettings from "js/_components/molecules/GeneralSettings";
import GeneralNotifications from "js/_components/molecules/GeneralNotifications";
import Divider from "@material-ui/core/Divider";
import { myTheme } from "theme";
import Button from "@material-ui/core/Button";
import { putUserSettings } from "js/services/UserServices";
import ToastMessage from "../atoms/_toast-message";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: myTheme.typography.fontFamily,
  },
}));

export default function GeneralProfileTab(props) {
  console.log(props.id, "in  general settings");
  const [userId, setUserId] = useState("");
  const [reminder, setReminder] = useState("");
  const [summary, setSummary] = useState("");
  const [useCalculator, setUseCalculator] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [defaultDate, setDefaultDate] = useState("");
  const [reminderForDueBills, setReminderForDueBills] = useState("");

  const [newBill, setNewBill] = useState("");
  const [notifyExceededExpense, setNotifyExceededExpense] = useState("");
  const [moneyTransaction, setMoneyTransaction] = useState("");
  const [exceedingGoalPeriod, setExceedingGoalPeriod] = useState("");
  const [reachGoal, setReachGoal] = useState("");
  const [recurringDueExpenses, setRecurringDueExpenses] = useState("");
  const [manageUncategorized, setManageUncategorized] = useState("");
  const [email, setEmail] = useState("");
  const [textMessages, setTextMessages] = useState("");
  const [openToastSuccess, setOpenToastSuccess] = useState(false);

  const data = {
    id: 1,
    userId: userId,
    dailyReminder: reminder,
    summary: summary,
    usageOfCalculator: useCalculator,
    defaultTimePeriod: timePeriod,
    defaultDate: defaultDate,
    reminderForBillsDue: reminderForDueBills,
    notifyExceededExpense: notifyExceededExpense,
    newBillAdded: newBill,
    transactionsInAccount: moneyTransaction,
    notifyExceedGoalPeriod: exceedingGoalPeriod,
    notifyWhenGoalReached: reachGoal,
    recurringExpensesDue: recurringDueExpenses,
    manageUncategorized: manageUncategorized,
    email: email,
    textMessages: textMessages,
    details: null,
  };
  const submitForm = (event) => {
    event.preventDefault();
    setOpenToastSuccess(true);
    putUserSettings(props.id, data);
    
  };
  const handleToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <GeneralSettings
              setReminder={setReminder}
              setSummary={setSummary}
              setUseCalculator={setUseCalculator}
              setTimePeriod={setTimePeriod}
              setDefaultDate={setDefaultDate}
              setReminderForDueBills={setReminderForDueBills}
              reminder={reminder}
              summary={summary}
              useCalculator={useCalculator}
              timePeriod={timePeriod}
              defaultDate={defaultDate}
              reminderForDueBills={reminderForDueBills}
              id={props.id}
            />
          </div>
          <Divider />
          <div style={{ paddingBottom: "10px" }}></div>
          <GeneralNotifications
            setNewBill={setNewBill}
            setNotifyExceededExpense={setNotifyExceededExpense}
            setMoneyTransaction={setMoneyTransaction}
            setExceedingGoalPeriod={setExceedingGoalPeriod}
            setReachGoal={setReachGoal}
            setRecurringDueExpenses={setRecurringDueExpenses}
            setManageUncategorized={setManageUncategorized}
            setEmail={setEmail}
            setTextMessages={setTextMessages}
            newBill={newBill}
            notifyExceededExpense={notifyExceededExpense}
            moneyTransaction={moneyTransaction}
            exceedingGoalPeriod={exceedingGoalPeriod}
            reachGoal={reachGoal}
            recurringDueExpenses={recurringDueExpenses}
            manageUncategorized={manageUncategorized}
            email={email}
            textMessages={textMessages}
            id={props.id}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <div></div>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Save
          </Button>

          <ToastMessage
            openToastSuccess={openToastSuccess}
            message="Details Saved Successfully"
            handleToastClose={handleToastClose}
            type="success"
          />
        </Grid>
      </Grid>
    </div>
  );
}

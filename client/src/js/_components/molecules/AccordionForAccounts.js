import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PaymentIcon from "@material-ui/icons/Payment";
import MoneyIcon from "@material-ui/icons/Money";
import COLORS from "js/utils/colors";
import { getBudgets } from "js/services/BudgetService";
import { getExpenses } from "js/services/ExpenseService";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  amountText: {
    width: "100%",
  },

  category: {
    position: "relative",
    bottom: "22%",
    marginLeft: "10px",
    color: COLORS.default,
  },

  amountInHand: {
    color: COLORS.green,
    display: "inline-block",
    float: "right",
  },

  amountSpent: {
    color: COLORS.red,
    display: "inline-block",
    float: "right",
  },

  amount: {
    display: "inline-block",
    float: "right",
  },

  disabledBackground: {
    backgroundColor: COLORS.white + "!important",
  },
}));

export default function AccordionForAccounts() {
  const [transactionList, setTransactionsList] = useState([]);
  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
    getExpenses().then((response) => {
      if (response.length === 0) {
        console.log("No Expenses");
      } else {
        setTransactionsList(response);
      }
    });

    getBudgets().then((result) => {
      if (result.length === 0) {
        console.log("budget not found");
      } else {
        let tempBudgetList = [];

        result.map((budget) => tempBudgetList.push(budget.budgetComponents[0]));
        setBudgetList(tempBudgetList);
      }
    });
  }, []);

  const classes = useStyles();

  let expenseAmount = 0;
  transactionList
    .filter((transaction) => transaction.type === "debit")
    .map(
      (transaction) => (expenseAmount = expenseAmount + transaction.amount * 1)
    );

  let budgetAmount = 0;
  budgetList.map(
    (transaction) => (budgetAmount = budgetAmount + transaction.currency * 1)
  );
  let incomeValue = 0;
  transactionList
    .filter((transaction) => transaction.type === "credit")
    .map((transaction) => (incomeValue = incomeValue + transaction.amount * 1));
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className={classes.amountText}>
            <AccountBalanceIcon />
            <span className={classes.category}> Cash in Accounts</span>
            <div id="amount" className={classes.amountInHand}>
              {incomeValue}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.amountText}>
            Axis Bank
            <div id="amount" className={classes.amountInHand}>
              {incomeValue / 2}
            </div>
          </div>
        </AccordionDetails>

        <AccordionDetails>
          <div className={classes.amountText}>
            HDFC{" "}
            <div id="amount" className={classes.amountInHand}>
              {incomeValue / 2}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          data-testId="AccordionSummaryBudget"
        >
          <div className={classes.amountText}>
            <AccountBalanceWalletIcon />
            <span className={classes.category}>Budget</span>{" "}
            <div id="amount" className={classes.amount}>
              {budgetAmount}
            </div>
          </div>
        </AccordionSummary>
        {budgetList.map((metrics, index) => {
          index += 1;
          return (
            <AccordionDetails data-testId="budgetData">
              <div className={classes.amountText}>
                {metrics.category}{" "}
                <div id="amount" className={classes.amount}>
                  {metrics.currency}
                </div>
              </div>
            </AccordionDetails>
          );
        })}
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          data-testId="expensesBar"
        >
          <div className={classes.amountText}>
            <PaymentIcon />
            <span className={classes.category}>Expenses</span>{" "}
            <div id="amount" className={classes.amountSpent}>
              {expenseAmount}
            </div>
          </div>
        </AccordionSummary>
        {transactionList.filter((transaction) => transaction.type ==="debit").map((metrics, index) => {
          index += 1;
          return (
            <AccordionDetails>
              <div className={classes.amountText}>
                {metrics.category}{" "}
                <div id="amount" className={classes.amountSpent}>
                  {metrics.amount}
                </div>
              </div>
            </AccordionDetails>
          );
        })}
      </Accordion>
      <Accordion disabled className={classes.disabledBackground}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className={classes.amountText}>
            <MoneyIcon />
            <span className={classes.category}>
              Balance amount in budget
            </span>{" "}
            <div id="amount" className={classes.amount}>
              {budgetAmount - expenseAmount}
            </div>
          </div>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

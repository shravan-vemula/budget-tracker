import React from "react";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import BudgetMetricsCard from "js/_components/organisms/_budget-metrics-card";
import BudgetExpensesCard from "js/_components/organisms/_budget-expenses-card";
import AddBudgetCard from "js/_components/molecules/_add-budget-card";
import { myTheme } from "theme";
import AddBudgetDialogBox from "../organisms/_add-budget-dialog-box";
import ToastMessage from "js/_components/atoms/_toast-message";
import DateDropdown from "js/_components/organisms/_date-dropdown";
import { getBudgets } from "js/services/BudgetService";
import { getExpenses } from "js/services/ExpenseService";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: myTheme.typography.fontFamily.default,
    backgroundColor: myTheme.palette.background.default,
    height: "850px",
    
    ["@media (min-width:1650px)"]: {
      marginLeft:'8%',
      marginRight:'auto',
      maxWidth:'1700px',
    },
  

    ["@media (min-width:1440px)"]: {
      width: "1440px",
    },
    ["@media (max-width:768px)"]: {
      width: "768px",
    },
  },
  date: {
    margin: "80px 0 0 45px",
  },
  month: {
    width: "64px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.default.main,
  },
  year: {
    width: "74px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.secondary.main,
  },
  cards: {
    margin: "52px 0 0 40px",
  },
  subHeading: {
    margin: "30px 0 0 5px",
    width: "171px",
    height: "30px",
    fontSize: "20px",
    color: myTheme.palette.default.main,
  },
  expenseCards: {
    marginTop: "18px",
  },
}));

const BudgetDashboard = () => {
  const classes = useStyles();
  const [budgetList, setBudgetList] = React.useState([]);
  const [budgetComponentList, setBudgetComponentList] = React.useState([]);
  const [allBudgetComponents, setAllBudgetComponents] = React.useState([]);
  const [previousBudgetList, setPreviousBudgetList] = React.useState([]);
  const [dialogBoxOpen, setDialogBoxOpen] = React.useState(false);
  const [transactionsList, setTransactionsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const metrics = ["Budget", "Spent", "Remaining", "Inflow"];
  const [openToastSuccess, setOpenToastSuccess] = React.useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  const [selectedDate, setSelectedDate] = React.useState(month + "," + year);
  let fullDate = selectedDate.split(",");
  let selectedMonth = fullDate[0];
  let selectedYear = fullDate[1];

  React.useEffect(() => {
    getBudgets().then((result) => {
      if (result.length === 0) {
        console.log("budget not found");
        setLoading(false);
      }
      fetchData();
    });
  }, [selectedDate]);

  const getBudgetsOfSelectedMonth = (budgets) => {
    let tempBudgets = [];
    for (let budgetIndex in budgets) {
      let startDate = new Date(budgets[budgetIndex].startDate);
      if (
        startDate.getMonth() === monthNames.indexOf(selectedMonth) &&
        startDate.getFullYear() == selectedYear
      ) {
        tempBudgets.push(budgets[budgetIndex]);
      }
    }
    return tempBudgets;
  };

  const getPreviousMonthBudgets = () => {
    let tempBudgets = [];
    for (let budgetIndex in budgetList) {
      let startDate = new Date(budgetList[budgetIndex].startDate);
      if (startDate.getMonth() === monthNames.indexOf(selectedMonth) - 1) {
        tempBudgets.push(budgetList[budgetIndex].budgetComponents[0]);
      }
    }
    return tempBudgets;
  };

  const fetchData = () => {
    getBudgets().then((result) => {
      let budgetsOfSelectedMonth = getBudgetsOfSelectedMonth(result);
      let tempBudgetComponentList = [];
      let tempAllBudgetComponents = [];
      budgetsOfSelectedMonth.map((budget) =>
        tempBudgetComponentList.push(budget.budgetComponents[0])
      );
      result.map((budget) =>
        tempAllBudgetComponents.push(budget.budgetComponents[0])
      );

      setBudgetList(result);
      setAllBudgetComponents(tempAllBudgetComponents);
      setBudgetComponentList(tempBudgetComponentList.reverse());
      setPreviousBudgetList(getPreviousMonthBudgets());
    });

    getExpenses().then((response) => {
      if (response.length === 0) {
        console.log("No expenses");
      } else {
        setTransactionsList(response);
      }
    });
    setLoading(false);
  };

  const getSelectedMonthTransactions = () => {
    let tempTransactions = [];
    for (let transactionIndex in transactionsList) {
      let startDate = new Date(transactionsList[transactionIndex].createdAt);

      if (
        startDate.getMonth() === monthNames.indexOf(selectedMonth) &&
        startDate.getFullYear() == selectedYear &&
        transactionsList[transactionIndex].type === "debit"
      ) {
        tempTransactions.push(transactionsList[transactionIndex]);
      }
    }
    return tempTransactions;
  };

  const getSpentValue = (currentCategory) => {
    let spentValue = 0;
    let currentMonthTransactions = getSelectedMonthTransactions();
    currentMonthTransactions
      .filter((transaction) => transaction.category === currentCategory)
      .map((transaction) => (spentValue = spentValue + transaction.amount * 1));

    return spentValue;
  };

  const getAllMonthsBudgetValue = () => {
    let totalBudget = 0;
    allBudgetComponents.map(
      (budget) => (totalBudget = totalBudget + budget.currency * 1)
    );
    return totalBudget;
  };

  let budgetExpenseCards = null;
  let totalBudget = 0;
  let totalInflow = 0;
  transactionsList
    .filter((transaction) => transaction.type === "credit")
    .map((transaction) => (totalInflow = totalInflow + transaction.amount * 1));

  if (!loading && budgetComponentList.length > 0) {
    budgetComponentList.map(
      (budget) => (totalBudget = totalBudget + budget.currency * 1)
    );

    budgetExpenseCards = budgetComponentList.map((budget, key) => (
      <Grid item>
        <BudgetExpensesCard
          key={budget.id}
          category={budget.category}
          budget={budget.currency}
          spent={getSpentValue(budget.category)}
          remaining={budget.currency - getSpentValue(budget.category)}
          inflow={totalInflow}
        />
      </Grid>
    ));
  }

  let previousTotalBudget = 0;
  previousBudgetList.map(
    (budget) =>
      (previousTotalBudget = previousTotalBudget + budget.currency * 1)
  );

  const handleAddBudgetClick = () => {
    if (totalBudget >= totalInflow) {
      setOpenToastSuccess(true);
    } else {
      setDialogBoxOpen(true);
    }
  };
  const handleDialogBoxClose = () => {
    setDialogBoxOpen(false);
  };

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };

  const getTotalSpentValue = () => {
    let spentValue = 0;
    let currentMonthTransactions = getSelectedMonthTransactions();
    currentMonthTransactions.map(
      (transaction) => (spentValue = spentValue + transaction.amount * 1)
    );

    return spentValue;
  };

  return (
    <div className={classes.root}>
      <div className={classes.date}>
        <Grid container>
          <Typography>
            <span className={classes.month}>{selectedMonth + " "}</span>
            <span className={classes.year}>{selectedYear}</span>
          </Typography>
          <DateDropdown setSelectedDate={setSelectedDate} />
        </Grid>
      </div>
      <div className={classes.cards}>
        <Grid container spacing={3} xs={12}>
          {metrics.map((metric, index) => {
            index += 1;
            return (
              <Grid item>
                <BudgetMetricsCard
                  key={index}
                  heading={metric}
                  value={totalBudget}
                  inflow={totalInflow}
                  previousTotalBudget={previousTotalBudget}
                  spentValue={getTotalSpentValue()}
                />
              </Grid>
            );
          })}
        </Grid>
        <Typography className={classes.subHeading}>
          <Box fontWeight="fontWeightBold">Budget expenses</Box>
        </Typography>
        <div className={classes.expenseCards}>
          {!loading && (
            <Grid container spacing={3} xs={12}>
              <Grid
                item
                onClick={handleAddBudgetClick}
                style={{ cursor: "pointer" }}
              >
                <AddBudgetCard />
              </Grid>
              <AddBudgetDialogBox
                open={dialogBoxOpen}
                handleClose={handleDialogBoxClose}
                fetchData={fetchData}
                totalBudget={getAllMonthsBudgetValue()}
                totalInflow={totalInflow}
                budgetList={budgetList}
                selectedMonth={selectedMonth}
              />
              {budgetExpenseCards}
              <ToastMessage
                openToastSuccess={openToastSuccess}
                message="Budget cannot be added.Your total budget cannot be greater than your income"
                handleToastClose={handleToastClose}
              />
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetDashboard;

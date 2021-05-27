import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedCard from "js/_components/molecules/_feedcard";
import TransactionCard from "js/_components/molecules/_transactioncard";
import Chart from "js/_components/molecules/_chart";
import TopCard from "js/_components/molecules/_topcard";
import { myTheme } from "theme";
import AddTransaction from "./_addtransaction";
import { getBudgets } from "js/services/BudgetService";
import { getExpenses } from "js/services/ExpenseService";
import { getCategories } from 'js/services/CategoryService';
import BudgetMetricsCard from "js/_components/organisms/_budget-metrics-card";
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: myTheme.typography.fontFamily.default,
    display: "flex",
    position: "absolute",
    left: '3%',
    top: '5%',
  },

  OverviewDisplay : {
    flexGrow: "0",
    maxWidth: "100%",
    flexBasis: "100%"
  },


  head: {

    height: "44px",
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize: "30px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.47",
    letterSpacing: "normal",
    color: "#344563",

  },
  cattop: {
    position: "absolute",

    left: "126px",
    top: "711px",

  },
  categorieswithtop: {
    fontFamily: "Inter,sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.0",
    letterSpacing: "normal",
    color: "#344563",
    marginLeft: "2%"
  }

}));

const Overview = () => {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [budgetData, setBudgetData] = useState({});
  const [add, setAdd] = useState("None");
  const [categories, setCategories] = useState({});
  const [reload, setReload] = useState(false);



  const getToday = () => {
    let today = new Date();
    let month;
    let day;
    if (today.getDate() < 10) {
      day = "0" + today.getDate();
    } else {
      day = today.getDate();
    }
    if (today.getMonth() < 9) {
      month = '0' + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let retdate = today.getFullYear() + '-' + (month) + '-' + day;
    return retdate;
  };

  const listTopExpenses = () => {
    let renderCards = [];

    let byCat = new Map();
    let today = getToday();

    for (let exp in data) {
      if (data[exp].type.toLowerCase() == "debit" && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        if (byCat.has(data[exp].category)) {
          byCat.set(data[exp].category, parseInt(byCat.get(data[exp].category)) + parseInt(byCat.get(data[exp].category)));

        } else {
          byCat.set(data[exp].category, parseInt(data[exp].amount));

        }
      }
    }
    let amountList = [];
    for (let n of byCat) {
      amountList.push((n[1]));
    }

    amountList.sort(function (a, b) { return b - a });
    // console.log(amountList);
    let minCards = Math.min(amountList.length, 4);

    let widths = ["126px", "357px", "587px", "817px"];
    let cats = new Set();
    for (let i = 0; i < minCards; i++) {
      let title;
      for (let n of byCat) {
        // console.log(n[1]);
        amountList.push((n[1]));
        if (n[1] == amountList[i] && !cats.has(n[0])) {
          title = n[0];
          cats.add(n[0]);
          break;
        }
      }
      // console.log(amountList[i] + ": " + title);
      renderCards.push(<Grid item xs={12} sm={6} md={4} lg={3} xl={2}><TopCard left={widths[i]} top="759px" title={title} amount={amountList[i]} /></Grid>);
    }
    return (renderCards);
  };



  const getCurrentMonth = () => {
    let m_names = ['January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    let presetMonth = m_names[d.getMonth()];
    return presetMonth;
  };

  const getTotalExpenses = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if ((data[exp].type.toLowerCase() == "debit") && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };

  const getTotalBudgets = () => {
    
    let budget=0;
    for (let bud in budgetData) {

      if (budgetData[bud].budgetComponents) {
        let endDate = new Date(budgetData[bud].endDate);
        let today = new Date();
        budgetData[bud].budgetComponents.map((component) => {
          budget += parseInt(component.currency);
        });
      }

    }

    return budget;

  };


  const getBills = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if (data[exp].category == "Bills" && data[exp].type.toLowerCase() == "debit" && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };


  const getIncome = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if (data[exp].type.toLowerCase() == "credit" && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };


  const getSpentToday = () => {
    let today = new Date();
    let day;
    if (today.getDate() < 10) {
      day = "0" + today.getDate();
    } else {
      day = today.getDate();
    }
    let month;
    if (today.getMonth() < 9) {
      month = '0' + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let date = today.getFullYear() + '-' + (month) + '-' + day;
    let sum = 0;
    for (let exp in data) {
      if (data[exp].createdAt.substring(0, 10) == date && data[exp].type.toLowerCase() == "debit") {
        sum += parseInt(data[exp].amount);
      } 
    }
    return sum;
  };

  const update = () => {

      getExpenses().then((response) => {
        if(response.length === 0){
          console.log("No Expenses");
  
        }
        else{
          setData(response);
        }
      });
  
      getBudgets().then((result) => {
          if (result.length === 0) {
            console.log("budget not found");
          }
          else{
            console.log(result);
            setBudgetData(result);
          }
        });

        getCategories().then( response => {
          setCategories(response);
        })

  }
  useEffect(() => {
    update();
    listTopExpenses();

  }, [reload]);

  return (

    <Grid id="max-width" style={{maxWidth: "1440px"}} container justify="center"   >
      <Grid item>
        <AddTransaction left="440px" top="223px" display={add} addClick={(a) => setAdd(a)} categories={categories} update={() => update()} />
      </Grid>
      <Grid container id="teststststst" style={{maxWidth:"100%",flexBasis: "100%"}} xs={12} sm={12} md={12} lg={10} xl={10} spacing={4}>

        <Grid item xs={6} sm={3} style={{ marginTop: "40px", marginBottom: "-30px" }}>
          <p className={classes.head}> Overview</p>
        </Grid>
        <Grid item spacing={4} xs={12} sm={12} md={12} lg={12} xl={12} justify="space-between" >
          <Grid container spacing={4} xs={12} sm={12} md={12} lg={12} xl={12} justify="space-between" >
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <BudgetMetricsCard heading="Income" value={getIncome()} text={"For " + getCurrentMonth()} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2}>
              <BudgetMetricsCard heading="Expense" value={getTotalExpenses()} text={getSpentToday()} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2}>
              <BudgetMetricsCard heading="Budget" value={getTotalBudgets()} spent={getTotalExpenses()} left={(getTotalBudgets() - getTotalExpenses())} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2}>
              <BudgetMetricsCard heading="Bills" value={getBills()} />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Grid container spacing={3} xs={12} sm={12} md={12} lg={12} xl={12} >
            <Grid container xs={12} sm={12} md={12} lg={9} xl={9} spacing={3}  >
              <Grid item xs={12} sm={12} md={12} >
                <Chart left="126px" top="294px" expData={data} budgetData={budgetData} />
              </Grid>
              <Grid item xs={12} sm={12} >
                <p className={classes.categorieswithtop}> Categories with top expenses</p>
              </Grid>
              <Grid container xs={11} sm={11} spacing={3} justify="start">
                <Grid container style={{marginBottom:"4%"}}>
                  {listTopExpenses()}
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={3} xl={3} spacing={3} >
              <Grid item xs={12} sm={6}  >
                <FeedCard xs={12} />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={12} >
                <TransactionCard data={data} addClick={(a) => setAdd(a)} />
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default Overview;

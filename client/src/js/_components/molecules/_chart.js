import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import ExpenseChart from "js/_components/molecules/_expensechart";
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative",
    width: '96%',
    height: '387px',
    border: 'solid 1px rgba(255, 255, 255, 0)',
    borderRadius: '14px',
    left:"1%"
  },

  title: {
    fontSize: 14,
  },
  feeds: {
    width: "59px",
    height: "30px",
    fontFamily: "Inter,sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: "#344563",
  },
  feeddata: {
    position: 'relative',
    marginTop: "10px",
    left: '24px',
    width: "288px",
    height: "66px",
    fontFamily: "Inter,sans-serif",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    color: "#5e6c84",
  },
  heading: {
    position: 'absolute',
    fontFamily: "Inter,sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    left: '24px',
    top: '0px',
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color:"#344563"
  },
  chart: {
    position: 'absolute',
    fontFamily: "Inter,sans-serif",
    fontSize: "14px",
    fontWeight: "normal",
    left: '24px',
    top: '70px',
  },
  select: {
    position: 'absolute',
    fontFamily: "Inter,sans-serif",
    fontSize: "12px",
    fontWeight: "normal",
    left: '86%',
    top: '24px',
    width: "100px",
    height: "26px"
  },
  option: {
    fontFamily: "Inter,sans-serif",
    fontSize: "12px",
    color: "#5e6c84",
  },
  tabs: {
    position: 'absolute',
    top: "10px",
    left: "55%",
    width: "232px",
    height: "26px",
    fontFamily: "Inter,sans-serif",
    fontSize: "14px",
    color: "#5e6c84",
    borderRadius: "6px",
    letterSpacing: "normal",
    lineHeight: "1.6",
    border: "solid 1px #c5cbe1"

  }

}));


export default function Chart(props) {

  const classes = useStyles(props);
  const graphData = [];
  const addRow = (name, expense, budget) => {
    return ({
      name, expense, budget,
    })
  };
  let graph = null;
  let last = null;
  const [period, setPeriod] = useState("DAILY");

  console.log("budget Data")

  const getMonth = (m) => {
    let m_names = ['January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    return m_names[m];
  };

  let data = props.expData;
  let budgetData = props.budgetData;

  let today = new Date();
  let budgetByDate = new Map();
  let budgetByWeek = new Map();
  let budgetByMonth = new Map();
  let budgetByYear = new Map();

  
  let expenseByWeek = new Map();
  let expenseByMonth = new Map();
  let expenseByYear = new Map();


  // daily budget datas
  let budget;
  for (let bud in budgetData) {
    if (budgetData[bud].budgetComponents) {

      let endDate = new Date(budgetData[bud].endDate);
      let startDate = new Date(budgetData[bud].startDate);
      budget = 0;
      budgetData[bud].budgetComponents.map((component) => {
        budget += parseInt(component.currency);
      });
      //for daily budget data
      for (let i = 0; i < 10; i++) {
        let last = new Date(today.getTime() - ((i) * 24 * 60 * 60 * 1000));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);
        if (last.getTime() >= startDate.getTime() && last.getTime() <= endDate.getTime()) {
          if (budgetByDate.has(tempDate)) {
            budgetByDate.set(tempDate, parseInt(budgetByDate.get(tempDate)) + budget);
          } else {
            budgetByDate.set(tempDate, budget);
          }
        }

      }
      //for weekly budget data
      let weekday = today.getDay();
      for (let i = 0; i < 10; i++) {
        let last = new Date(today.getTime() - ((7 * i + weekday - 1) * 24 * 60 * 60 * 1000));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);
        let budgetGapDays = ((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
        let diffFromStartDay = parseInt((last.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
        let diffFromEndDay = parseInt((endDate.getTime() - last.getTime()) / (24 * 60 * 60 * 1000));
        let minDays = Math.min(...[budgetGapDays, diffFromStartDay + 7, diffFromEndDay, 7]);
        let weekBudget;
        if (minDays > 0) {
          if (diffFromStartDay >= 0 && diffFromEndDay >= 7) {
            weekBudget = parseInt(budget * (diffFromEndDay / budgetGapDays));
          }
          else {
            weekBudget = parseInt(budget * (minDays / budgetGapDays));
          }

          if (budgetByWeek.has(tempDate)) {
            budgetByWeek.set(tempDate, parseInt(budgetByWeek.get(tempDate)) + weekBudget);
          } else {
            budgetByWeek.set(tempDate, weekBudget);
          }
        } else {
          if (!budgetByWeek.has(tempDate)) {
            budgetByWeek.set(tempDate, 0);
          }
        }
      }

      //for monthly budget data
      let month = today.getMonth();
      let year = today.getFullYear();
      for (let i = 0; i < 10; i++) {
        let last = new Date(year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("01"));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);
        if ((last.getMonth() == endDate.getMonth() || last.getMonth() == startDate.getMonth()) && last.getFullYear() == endDate.getFullYear()) {
          if (budgetByMonth.has(tempDate)) {
            budgetByMonth.set(tempDate, parseInt(budgetByMonth.get(tempDate)) + budget);
          } else {
            budgetByMonth.set(tempDate, budget);
          }
        } else {
          if (!budgetByMonth.has(tempDate)) {
            budgetByMonth.set(tempDate, 0);
          }
        }

        month--;
        if (month < 0) {
          month += 12;
          year--;
        }
      }

      //for yearly budget data
      year = today.getFullYear();
      for (let i = 0; i < 10; i++) {
        let last = new Date(year + "-" + "01" + "-" + ("01"));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);

        if (last.getFullYear() == endDate.getFullYear()) {
          if (budgetByYear.has(tempDate)) {
            budgetByYear.set(tempDate, parseInt(budgetByYear.get(tempDate)) + budget);
          } else {
            budgetByYear.set(tempDate, budget);
          }
        } else {
          if (!budgetByYear.has(tempDate)) {
            budgetByYear.set(tempDate, 0);
          }
        }
        year--;

      }


    }
  }

  //expense data iterations
  
  for (let exp in data) {
    if (data[exp].type.toLowerCase() == "debit") {
      let startDate = new Date(data[exp].createdAt);
      let expense = parseInt(data[exp].amount);

      //for weekly expense data
      let weekday = today.getDay();
      for (let i = 0; i < 10; i++) {

        let last = new Date(today.getTime() - ((7 * i + weekday - 1) * 24 * 60 * 60 * 1000));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);
        let diffFromStartDay = parseInt((new Date(tempDate) - startDate.getTime()) / (24 * 60 * 60 * 1000));
        let minDays = diffFromStartDay + 7;
        if (minDays >= 0 && minDays <= 7) {

          if (expenseByWeek.has(tempDate)) {

            expenseByWeek.set(tempDate, parseInt(expenseByWeek.get(tempDate)) + expense);
          } else {

            expenseByWeek.set(tempDate, expense);
          }
        } else {

          if (!expenseByWeek.has(tempDate)) {

            expenseByWeek.set(tempDate, 0);

          }
        }

      }

      //for monthly expense data
      let month = today.getMonth();
      let year = today.getFullYear();
      for (let i = 0; i < 10; i++) {
        let last = new Date(year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("01"));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);
        if (last.getMonth() == startDate.getMonth() && last.getFullYear() == startDate.getFullYear()) {
          if (expenseByMonth.has(tempDate)) {
            expenseByMonth.set(tempDate, parseInt(expenseByMonth.get(tempDate)) + expense);
          } else {
            expenseByMonth.set(tempDate, expense);
          }
        } else {
          if (!expenseByMonth.has(tempDate)) {
            expenseByMonth.set(tempDate, 0);
          }
        }

        month--;
        if (month < 0) {
          month += 12;
          year--;
        }
      }
      // for yearly expense data
      year = today.getFullYear();
      for (let i = 0; i < 10; i++) {
        let last = new Date(year + "-" + "01" + "-" + ("01"));
        let tempDate = last.getFullYear() + "-" + ("0" + (last.getMonth() + 1)).slice(-2) + "-" + ("0" + last.getDate()).slice(-2);

        if (last.getFullYear() == startDate.getFullYear()) {
          if (expenseByYear.has(tempDate)) {
            expenseByYear.set(tempDate, parseInt(expenseByYear.get(tempDate)) + expense);
          } else {
            expenseByYear.set(tempDate, expense);
          }
        } else {
          if (!expenseByYear.has(tempDate)) {
            expenseByYear.set(tempDate, 0);
          }
        }
        year--;

      }


    }

  }

  const changeGraph = (value) => {
    setPeriod(value);
    console.log(value);
    if (value == "DAILY") {
      graph = (dailyGraphData);
      console.log(graph);
      console.log("updated");
    }
    if (value == "WEEKLY") {

      console.log(graph);
      graph = (weeklyGraphData);
      console.log("updated");
      graph = (weeklyGraphData);
    }
    if (value == "MONTHLY") {
      graph = (monthlyGraphData);
      console.log(graph);
      console.log("updated");
    }
    if (value == "YEARLY") {
      graph = (yearlyGraphData);
      console.log(graph);
      console.log("updated");
    }


  }

  const getGraph = () => {
    let value = period;
    if (value == "DAILY") {
      return (dailyGraphData);
      
    }
    if (value == "WEEKLY") {
      return (weeklyGraphData);
     

    }
    if (value == "MONTHLY") {
      return (monthlyGraphData);

     
    }
    if (value == "YEARLY") {
      return (yearlyGraphData);
      
    }
    return dailyGraphData;
  }
  const getDailyGraphData = () => {
    let byDate = new Map();
    today = new Date();
    let day;
    let month = today.getMonth();
    let budgetFund = 15000;
    let m = 5;
    let cumulativeExpense = 0;

    getExpenseDataByDate(data, byDate);
    for (let i = 1; i <= 30; i++) {

      ({ day, month, budgetFund, cumulativeExpense } = addGraphData(i, day, m, month, byDate, today, budgetFund, cumulativeExpense));
    }


    m++;
    cumulativeExpense = 0;
    for (let i = 1; i <= today.getDate(); i++) {
      ({ day, month, budgetFund, cumulativeExpense } = addGraphData(i, day, m, month, byDate, today, budgetFund, cumulativeExpense));

    }

    return (graphData);
  };
  function addGraphData(i, day, m, month, byDate, today, budgetFund, cumulativeExpense) {
    if (i < 10) {
      day = "0" + (i);
    }
    else { day = i; }

    if (m < 9) {
      month = '0' + (m + 1);
    }
    else {
      month = m + 1;
    }
    if (byDate.has(today.getFullYear() + '-' + (month) + '-' + day)) {

      cumulativeExpense += byDate.get(today.getFullYear() + '-' + (month) + '-' + day);
      graphData.push(addRow((getMonth(month - 1) + " " + day), cumulativeExpense, budgetByDate.get(today.getFullYear() + '-' + (month) + '-' + day)));

    }
    else {
      graphData.push(addRow((getMonth(month - 1) + " " + day), cumulativeExpense, budgetByDate.get(today.getFullYear() + '-' + (month) + '-' + day)));

    }
    return { day, month, budgetFund, cumulativeExpense };
  }

  function getExpenseDataByDate(data, byDate) {
    for (let exp in data) {
      if (data[exp].type.toLowerCase() == "debit") {
        if (byDate.has(data[exp].createdAt)) {
          byDate.set(data[exp].createdAt, parseInt(byDate.get(data[exp].createdAt)) + parseInt(data[exp].amount));
        }
        else {
          byDate.set(data[exp].createdAt, parseInt(data[exp].amount));
        }
      }
    }
  }
  getDailyGraphData();
  const dailyGraphData = graphData.slice(-10);
  const weeklyGraphData = [];
  const monthlyGraphData = [];
  const yearlyGraphData = [];


  for (let a of expenseByWeek) {

    last = new Date(a[0]);
    weeklyGraphData.push(addRow((getMonth(last.getMonth()) + " " + last.getDate()), a[1], budgetByWeek.get(a[0])));
  }
  weeklyGraphData.reverse();

  for (let a of expenseByMonth) {

    last = new Date(a[0]);
    monthlyGraphData.push(addRow((getMonth(last.getMonth())), a[1], budgetByMonth.get(a[0])));
  }
  monthlyGraphData.reverse();


  for (let a of expenseByYear) {
    last = new Date(a[0]);
    yearlyGraphData.push(addRow(last.getFullYear(), a[1], budgetByYear.get(a[0])));
  }
  yearlyGraphData.reverse();


  const [expDisp, setExpDisp] = useState("Block");
  const [budDisp, setBudDisp] = useState("Block");

  const overviewClick = () => {
    setExpDisp("Block");
    setBudDisp("Block");
  }

  const expenseClick = () => {
    setExpDisp("Block");
    setBudDisp("None");
  }

  const budgetClick = () => {
    setExpDisp("None");
    setBudDisp("Block");
  }


  return (
    <Card className={classes.root} >

      <p className={classes.tabs}><div id="tabs-text" style={{marginLeft: "8%"}}> <span onClick={()=>overviewClick()}>Overview </span> |<span onClick={()=>expenseClick()}> Expenses</span> | <span onClick={()=>budgetClick()}>Budget </span></div></p>
        <CardContent   >

          <p className={classes.heading}>Expenses vs Budget Overview</p>
          <div className={classes.chart} >
            <ExpenseChart data={getGraph()} expDisp={expDisp} budDisp={budDisp} />
          </div>
          <Select
            variant="outlined" className={classes.select} value={period} onChange={e => changeGraph(e.currentTarget.value)} >
            <option className={classes.option} value="DAILY" selected >DAILY</option>
            <option className={classes.option} value="WEEKLY" >WEEKLY</option>
            <option className={classes.option} value="MONTHLY" >MONTHLY</option>
            <option className={classes.option} value="YEARLY" >YEARLY</option>
          </Select>
        </CardContent>
    </Card>
  );


}



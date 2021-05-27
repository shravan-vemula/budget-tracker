import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import TCard from "js/_components/molecules/_tcard";
import addImg from "/images/add-24-px.svg";
import calImg from "/images/calendar-today-24-px.svg";
import sortImg from "/images/filter-list-24-px.svg";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    
    width: '335px',
    height: '446px',
    border: 'solid 1px rgba(255, 255, 255, 0)',
    borderRadius: '14px',
    overflow: 'auto',
  },

  CardContent:{
    position: "relative",
    bottom: "4%"

  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  feeds: {
    position: "absolute",
    top: "24px",
    left: "0px",
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

  message: {
    position: "relative",
    left: "0px",
    mariginBottom: "5px",
    fontFamily: "Inter,sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    color: "#5e6c84",
  },
  add: {
    position: "absolute",
    top: "30px",
    left: '200px',
    width: "24px",
    height: "24px",
  },
  cal: {
    position: "absolute",
    top: "30px",
    left: '235px',
    width: "24px",
    height: "24px",
  },
  sort: {
    position: "absolute",
    top: "30px",
    left: '271px',
    width: "24px",
    height: "24px",
  },
  bar: {
    position: "sticky",
    top: "0px",
    left: "0px",
    height: "60px",
    backgroundColor: "white",
    marginTop: "0px",
    zIndex: "1",
  },
  transtext: {
    fontFamily: "Inter,sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    color: "#5e6c84",
  },
});

export default function TransactionCard(props) {
  const classes = useStyles(props);

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
      month = "0" + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let retdate = today.getFullYear() + "-" + month + "-" + day;
    return retdate;
  };

  const getMonth = (m) => {
    let m_names = [
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

    let presetMonth = m_names[m];
    return presetMonth;
  };

  const listTransactions = (data) => {
    let renderCards = [];

    let byDate = new Map();

    for (let exp in data) {
      let tempDate = data[exp].createdAt.toString().substring(0, 10);
      if (byDate.has(tempDate)) {
        let templist = byDate.get(tempDate);

        if (data[exp].type.toLowerCase() == "debit") {
          templist.push(
            <TCard
              amount={"- ₹" + data[exp].amount}
              message="Payment Sent"
              title={data[exp].title}
            />
          );

          byDate.set(tempDate, templist);
        } else {
          templist.push(
            <TCard
              amount={"+ ₹" + data[exp].amount}
              message="Payment Recieved"
              title={data[exp].title}
            />
          );
          byDate.set(tempDate, templist);
        }
      } else {
        if (data[exp].type.toLowerCase() == "debit") {
          byDate.set(tempDate, [
            [
              <TCard
                amount={"- ₹" + data[exp].amount}
                message="Payment Sent"
                title={data[exp].title}
              />,
            ],
          ]);
        } else {
          byDate.set(tempDate, [
            [
              <TCard
                amount={"+ ₹" + data[exp].amount}
                message="Payment Recieved"
                title={data[exp].title}
              />,
            ],
          ]);
        }
      }
    }

    let today = new Date();
    let day;
    let month;
    let dayMessage;
    let year = today.getFullYear();
    for (let m = today.getMonth(); m >= 0; m--) {
      for (let i = 31; i > 0; i--) {
        if (i < 10) {
          day = "0" + i;
        } else {
          day = i;
        }

        if (m < 9) {
          month = "0" + (m + 1);
        } else {
          month = m + 1;
        }

        if (byDate.has(today.getFullYear() + "-" + month + "-" + day)) {
          if (today.getFullYear() + "-" + month + "-" + day == getToday()) {
            dayMessage = "Today";
          } else {
            dayMessage = getMonth(m) + " " + i + ", " + year;
          }

          renderCards.push(<p className={classes.transtext}>{dayMessage}</p>);
          renderCards.push(
            byDate.get(today.getFullYear() + "-" + month + "-" + day).reverse()
          );
        }
      }
    }

    return renderCards;
  };

  return (
    <Card className={classes.root}>
      <CardContent id="content" className={classes.CardContent}>
        <Grid container className={classes.bar}>
          <Grid container className={classes.feeds}>
            Transactions
          </Grid>
          <img
            data-testid="addimg"
            src={addImg}
            className={classes.add}
            onClick={() => props.addClick("Block")}
          />
          <img src={calImg} className={classes.cal} />
          <img src={sortImg} className={classes.sort} />
        </Grid>
        <Grid container className={classes.message}></Grid>
        {listTransactions(props.data)}
      </CardContent>
    </Card>
  );
}

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import OverviewImage from "images/widgets.png";
import AccountBalanceImage from "images/account-balance.png";
import AccountExpenseImage from "images/account-expense.png";
import AccountIncomeImage from "images/account-income.png";
import PiggyBankImage from "images/piggy-bank.png";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  overviewIcon: {
    height: "26px",
    width: "26px",
    padding: "15%",
  },
  accountsExpenseIcon: {
    width: "36px",
    padding: "15%",
  },
}));

const LeftNavIcon = ({ link, activeLink,itemName,index, setActiveLink }) => {
  const classes = useStyles();

  const images = [
    OverviewImage,
    AccountIncomeImage,
    AccountExpenseImage,
    PiggyBankImage,
    AccountBalanceImage,
  ];
  return (
    <Link
      to={link}
      onClick={() => {
        setActiveLink(index);
      }}
      data-testid={itemName}
    >
      <ListItem
        button
        style={
          activeLink === index
            ? { borderRight: "3px solid " + myTheme.palette.activeLink.color }
            : {}
        }
      >
        <img
          src={images[index - 1]}
          className={
            index === 2 || index === 3
              ? classes.accountsExpenseIcon
              : classes.overviewIcon
          }
          style={
            activeLink === index && (index > 3 || index === 1)
              ? { filter: "brightness(0.5)" }
              : {}
          }
        />
      </ListItem>
    </Link>
  );
};

export default LeftNavIcon;

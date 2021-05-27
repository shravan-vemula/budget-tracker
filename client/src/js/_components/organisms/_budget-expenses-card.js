import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";
import PiggyIcon from 'images/piggy-card-icon.png';
import { myTheme } from "theme";
import COLORS from "js/utils/colors";


const useStyles = makeStyles(() => ({
  expenseCard: {
    width: "296px",
    height: "152px",
    borderRadius: "14px",
    backgroundColor: COLORS.white,
  },
  footerPrice: {
    marginLeft: "3px",
    fontSize: "16px",
    ccolor: myTheme.palette.default.main,
  },
  category: {
    width: "167px",
    height: "30px",
    fontSize: "20px",
    color: myTheme.palette.default.main,
  },
  icon: {
    margin: "-5px 0 0 40px",
  },
  metrics: {
    marginTop: "25px",
  },
  metricName: {
    width: "95px",
    height: "18px",
    fontSize: "14px",
    color: myTheme.palette.primary.main,
  },
  metricValue: {
    marginTop: "12px",
    width: "98px",
    height: "24px",
    fontSize: "16px",
    color: myTheme.palette.default.main,
  },
}));

const BudgetExpensesCard = ({ category, budget, spent, remaining }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.expenseCard} elevation={2}>
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography className={classes.category}>{category}</Typography>
            </Grid>
            <Grid item className={classes.icon}>
              <img src={PiggyIcon} />
            </Grid>
          </Grid>
          <div className={classes.metrics}>
            <Grid container spacing={10}>
              <Grid item className={classes.metricName}>
                Budget
              </Grid>
              <Grid item className={classes.metricName}>
                Spent
              </Grid>
              <Grid item className={classes.metricName}>
                Remaining
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item className={classes.metricValue}>
                <Typography>
                  <Box fontWeight={700}>₹ {budget}</Box>
                </Typography>
              </Grid>
              <Grid item className={classes.metricValue}>
                <Typography>
                  <Box fontWeight={700}>₹ {spent}</Box>
                </Typography>
              </Grid>
              <Grid item className={classes.metricValue}>
                <Typography>
                  <Box fontWeight={700}>₹ {remaining}</Box>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetExpensesCard;

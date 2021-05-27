import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import AddIcon from "images/add-icon.png";
import { myTheme } from 'theme'
import COLORS from "js/utils/colors";

const useStyles = makeStyles(() => ({
  topCard: {
    width: "296px",
    height: "152px",
    borderRadius: "14px",
    backgroundColor: COLORS.white,
  },
  icon: {
    margin: "28px 0 0 110px",
  },
  heading: {
    width: "101px",
    height: "28px",
    fontSize: "18px",
    color:myTheme.palette.default.main,
    margin: "15px 0 0 86px",
  },
}));

const AddBudgetCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.topCard} elevation={2}>
        <CardContent>
          <img src={AddIcon} className={classes.icon} />
          <Typography className={classes.heading}>Add budget</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBudgetCard;

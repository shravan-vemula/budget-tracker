import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "theme";
import SelectList from "../molecules/_select-list";
import CloseIcon from "@material-ui/icons/Close";
import BTButton from "js/_components/atoms/_btbutton";
import BTCheckbox from "js/_components/atoms/_btcheckbox";
import AmountField from "../atoms/_amount-field";
import ToastMessage from "js/_components/atoms/_toast-message";
import { addBudget,updateBudget } from "js/services/BudgetService";
import { getCategories } from 'js/services/CategoryService';



const useStyles = makeStyles((theme) => ({
  heading: {
    width: "173px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.default.main,
    margin: "18px 0px 0px 22px",
  },
  selectHeading: {
    width: "76px",
    height: "18px",
    fontSize: "12px",
    fontWeight: 600,
    color: myTheme.palette.secondary.main,
    fontFamily: myTheme.typography.fontFamily.default,
  },
  timePeriodHead: {
    width: "138px",
    height: "34px",
    fontSize: "12px",
    fontWeight: 600,
    color: myTheme.palette.secondary.main,
    fontFamily: myTheme.typography.fontFamily.default,
    marginTop: "40px",
  },
  checkboxText: {
    width: "200px",
    height: "22px",
    fontSize: "14px",
    fontFamily: myTheme.typography.fontFamily.default,
    color: myTheme.palette.default.main,
  },
  closeIcon: {
    float: "right",
    margin: "-35px 0 0 550px",
    cursor: "pointer",
  },
}));

const AddBudgetDialogBox = ({
  open,
  handleClose,
  fetchData,
  totalBudget,
  totalInflow,
  budgetList,
}) => {
  const classes = useStyles();
  const date = new Date();
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
  const yearsList = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const frequencyList = ["None", "Weekly", "Monthly", "Yearly"];
  const [monthValue, setMonthValue] = React.useState(
    monthNames[date.getMonth()]
  );
  const [yearValue, setYearValue] = React.useState(date.getFullYear());
  const [categoryValue, setCategoryValue] = React.useState("All Categories");
  const [budgetValue, setBudgetValue] = React.useState("");
  const [frequency, setFrequency] = React.useState(frequencyList[2]);
  const [categoryList, setCategoryList] = React.useState([]);
  const [openToastSuccess, setOpenToastSuccess] = React.useState(false);
  const [hasError,setHasError] = React.useState(false);

  React.useEffect(() => {
    getCategories().then( response => {
      let temporaryList = ["All Categories"];
          response.map((object) => {
            temporaryList.push(object.name);
          });
          setCategoryList(temporaryList);
    })
  }, []);

  const getStartDate = () => {
    const d = new Date(
      yearValue,
      monthNames.indexOf(monthValue),
      date.getDate(),
      0,
      0,
      0
    );
    return d;
  };
  const getEndDate = () => {
    let d = getStartDate();
    if (frequency === "Weekly") {
      d.setDate(d.getDate() + 7);
    } else if (frequency === "Monthly") {
      d.setMonth(d.getMonth() + 1);
    } else if (frequency === "Yearly") {
      d.setFullYear(d.getFullYear() + 1);
    }
    return d;
  };

  const getBudgetsOfSelectedMonthAndSelectedCategory = () => {
    let tempBudgets = [];
    for (let budgetIndex in budgetList) {
      let startDate = new Date(budgetList[budgetIndex].startDate);
      if (
        startDate.getMonth() === monthNames.indexOf(monthValue) &&
        budgetList[budgetIndex].budgetComponents[0].category === categoryValue
      ) {
        tempBudgets.push(budgetList[budgetIndex]);
      }
    }
    return tempBudgets;
  };

  const setDefaults = () =>{
    handleClose();
    setBudgetValue("");
    setCategoryValue(categoryList[0]);
    setMonthValue(monthNames[date.getMonth()]);
    setYearValue(date.getFullYear());
    setFrequency(frequencyList[2]);
    fetchData();
  }

  const handleAddClick = (event) => {
    event.preventDefault();
    let budgetsOfSelectedMonthAndCategory = getBudgetsOfSelectedMonthAndSelectedCategory();
    if (totalBudget + budgetValue * 1 > totalInflow) {
      handleClose();
      setOpenToastSuccess(true);
    } else if (budgetsOfSelectedMonthAndCategory.length > 0) {
        updateBudget(budgetsOfSelectedMonthAndCategory,budgetValue,frequencyList.indexOf(frequency),categoryValue).then(response =>{
          if(response){
            setDefaults();
          }
        })
     
    } else {
     addBudget(getStartDate(),getEndDate(),budgetValue,frequencyList.indexOf(frequency),categoryValue).then(response =>{
       if(response){
         setDefaults();
       }
     })
    }
  };

  const handleToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container>
          <Typography className={classes.heading}>
            <Box fontWeight="fontWeightBold">Add Budget</Box>
          </Typography>
          <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        </Grid>
        <DialogContent>
          <AmountField
            setBudgetValue={setBudgetValue}
            label="Enter Amount"
            budgetValue={budgetValue}
          />
          <p className={classes.selectHeading}>CATEGORIES</p>
          <SelectList
            heading="CATEGORIES"
            styleClass="category"
            optionsList={categoryList}
            inputLabel="All Categories"
            setValue={setCategoryValue}
            testId="categorySelect"
          />
          <p className={classes.selectHeading}>STARTS</p>
          <Grid container spacing={2}>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={monthNames}
                inputLabel="Month"
                value={monthValue}
                setValue={setMonthValue}
                setHasError={setHasError}
                yearValue={yearValue}
             
              />
            </Grid>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={yearsList}
                inputLabel="Year"
                value={yearValue}
                setValue={setYearValue}
                setHasError={setHasError}
              />
            </Grid>
          </Grid>
          <br></br>
          <p className={classes.timePeriodHead}>TIME PERIOD</p>
          <Grid container>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={frequencyList}
                inputLabel="Frequency"
                setValue={setFrequency}
                value={frequency}
              />
            </Grid>
            <Grid item>
              <BTCheckbox />
            </Grid>
            <Grid item>
              <p className={classes.checkboxText}>Recurring the time period</p>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <BTButton
            disabled={budgetValue.length > 0 && !hasError ? false : true}
            handleAddClick={handleAddClick}
            value="ADD"
          />
        </DialogActions>
      </Dialog>

      <ToastMessage
        openToastSuccess={openToastSuccess}
        message="Budget cannot be added.Your total budget cannot be greater than your income"
        handleToastClose={handleToastClose}
      />
    </div>
  );
};

export default AddBudgetDialogBox;

import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Select } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { myTheme } from "theme";
import Typography from "@material-ui/core/Typography";
import { userGeneralSettings } from "js/services/UserServices";
import COLORS from "js/utils/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  spacing: {
    paddingLeft: "300px",
  },
  innerFormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectField: {
    height: "38px",
    width: "120px",
    fontSize: "14px",
    fontFamily: "Inter,san-serif",
  },
  notificationsPadding: {
    paddingTop: "20px",
  },
  InputField: {
    color: COLORS.hexgrey,
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize: "18px",
  },
}));
export default function GeneralSettings(props) {
  console.log(props.id,"in sgettings");
  useEffect(() => {
    async function innerFunction() {
      const response = await userGeneralSettings(props.id);
      props.setReminder(response.data.dailyReminder);
      props.setSummary(response.data.summary);
      props.setUseCalculator(response.data.usageOfCalculator);
      props.setTimePeriod(response.data.defaultTimePeriod);
      props.setDefaultDate(response.data.defaultDate);
      props.setReminderForDueBills(response.data.reminderForBillsDue);
    }
    innerFunction();
  }, []);

  const classes = useStyles();

  const handleChange = (event) => {
    props.setTimePeriod(event.target.value);
  };
  const handleChange1 = (event) => {
    props.setDefaultDate(event.target.value);
  };
  const handleChange2 = (event) => {
    props.setReminderForDueBills(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid
        id="form"
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <FormControl component="fieldset">
          <FormLabel
            style={{
              fontSize: "14px",
              paddingBottom: "10px",
              fontFamily: myTheme.typography.fontFamily.default,
            }}
          >
            SETTINGS
          </FormLabel>
          <FormGroup aria-label="position" row>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                alignItems="center"
                control={
                  <div style={{ paddingLeft:"10.9rem"}}>
                    <Checkbox
                      color="primary"
                      id="checkTrial"
                      checked={props.reminder}
                      onClick={() => {
                        props.setReminder(!props.reminder);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Daily remind adding Expenses Income
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft:"17.38rem"}}>
                    <Checkbox
                      color="primary"
                      checked={props.summary}
                      onClick={() => {
                        props.setSummary(!props.summary);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Monthly/Weekly summary
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "14.9rem" }}>
                    <Checkbox
                      color="primary"
                      checked={props.useCalculator}
                      onClick={() => {
                        props.setUseCalculator(!props.useCalculator);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Use calculator to enter amount
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "336px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                       <InputLabel id="demo-simple-select-outlined-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // style={{ fontSize:'14px',
                        // fontFamily:'Inter,san-serif'}}
                        label="Month"
                        value={props.timePeriod}
                        onChange={handleChange}
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        <MenuItem value={"January"}>January</MenuItem>
                        <MenuItem value={"February"}>February</MenuItem>
                        <MenuItem value={"March"}>March</MenuItem>
                        <MenuItem value={"April"}>April</MenuItem>
                        <MenuItem value={"May"}>May</MenuItem>
                        <MenuItem value={"June"}>June</MenuItem>
                        <MenuItem value={"July"}>July</MenuItem>
                        <MenuItem value={"August"}>August</MenuItem>
                        <MenuItem value={"September"}>September</MenuItem>
                        <MenuItem value={"October"}>October</MenuItem>
                        <MenuItem value={"November"}>November</MenuItem>
                        <MenuItem value={"December"}>December</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Default time period
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "249px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                       <InputLabel id="demo-simple-select-outlined-label">
                        Date
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.defaultDate}
                        onChange={handleChange1}
                        label="Date"
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Default date of month starting
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "196px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                       <InputLabel id="demo-simple-select-outlined-label">
                        Reminder
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.reminderForDueBills}
                        label="reminder"
                        onChange={handleChange2}
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        <MenuItem value={"1 day"}>1 day</MenuItem>
                        <MenuItem value={"1 week"}>1 week</MenuItem>
                        <MenuItem value={"10 days"}>10 days</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Remind me before the bills are dues
                  </Typography>
                }
                labelPlacement="start"
              />
              <div style={{ paddingBottom: "15px" }}></div>
            </Grid>
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}
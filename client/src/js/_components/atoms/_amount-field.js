import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>({

    textField: {
        marginBottom: "10px",
      },

}));

const AmountField = ({setBudgetValue,label,budgetValue}) =>{

    const classes = useStyles();
    const [errorMsg, setErrorMsg] = React.useState("");
    const [inputError, setInputError] = React.useState("");

    const validate = (value) => {
        if (isNaN(value)) {
          setBudgetValue(value.substring(0, value.length - 1));
        }
        if (value.length === 0) {
          setInputError("Please fill this field");
        } else {
          setInputError("");
        }
      };
    return(
        <TextField
        inputProps={{
          shrink: true,
          "data-testid": "textField",
        }}
        error={errorMsg.length > 0 ? true : false}
        required
        margin="dense"
        value={budgetValue}
        label={label}
        onChange={(e) => setBudgetValue(e.target.value)}
        fullWidth
        className={classes.textField}
        onKeyUp={(e) => validate(e.target.value)}
        onFocus={() => {
          setErrorMsg("");
        }}
        onBlur={(e) => {
          setErrorMsg(inputError);
        }}
        helperText={errorMsg}
      />

    )

};

export default AmountField;
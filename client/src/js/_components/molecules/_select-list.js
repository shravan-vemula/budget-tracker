import React from 'react';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  category: {
    width: 550,
    margin:'5px 0 5px 0',
  },
  year:{
     width:'132px',
    height:'30px',
  },
  helperTextClass:{
    width:'200px',
    height:'30px',
    marginLeft:'0px',
  }, 
}));


const SelectList = ( {heading,styleClass,inputLabel,optionsList,setValue,value,testId,setHasError,yearValue }) => {
    const classes =  useStyles();
    const [errorMsg,setErrorMsg] = React.useState('');
    const menuitems =  optionsList.map( (option,index) => (
         <MenuItem value={option}>{option}</MenuItem>
        ));
    const handleChange = (event) =>{
        event.preventDefault()
        if(inputLabel === "Month"){
         
            const date =  new Date();
           
            if(optionsList.indexOf(event.target.value)<date.getMonth() && yearValue <= date.getFullYear()){
                setErrorMsg("Start month cannot be in the past");
                setHasError(true);
            }
            else{
                setErrorMsg("");
                setHasError(false);
            }
        }
        else if(inputLabel === "Year"){
            const date =  new Date();   
            if(event.target.value< date.getFullYear()){
                setErrorMsg("Start year cannot be in the past");
                setHasError(true);
            }
            else{
                setErrorMsg("");
                setHasError(false);
            }
        }
        setValue(event.target.value);
    }
    return (
        <div>
        <FormControl variant="outlined" className={ styleClass === 'category' ? classes.category:classes.year } style = { inputLabel === "Frequency" ? {marginTop:'-10px'}:{}}  error = { errorMsg.length > 0 ? true : false}>
        <InputLabel id="demo-simple-select-outlined-label">{inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          data-testid="select"
          value={value}
          onChange={handleChange}
          label={inputLabel}
          data-testid={testId}
        >
            {menuitems}
        </Select>
     <FormHelperText className={errorMsg.length > 0 ? classes.helperTextClass : {}}>{errorMsg}</FormHelperText>
      </FormControl>
        </div>
    );
};

export default SelectList;
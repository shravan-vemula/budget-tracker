import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import COLORS from 'js/utils/colors';
import {myTheme} from 'theme';

const useStyles = makeStyles(() =>({
    button: {
        width: "90px",
        height: "36px",
        borderRadius: "6px",
        color: COLORS.white,
        backgroundColor: COLORS.darkGreyBlue,
        "&:disabled": {
          backgroundColor: COLORS.lightPeriwinkle,
          color: myTheme.palette.default.main,
        },
        "&:hover": {
          backgroundColor: myTheme.palette.default.main,
        },
        margin: "18px 30px 18px 0",
      },
}));

const BTButton = ({disabled,handleAddClick,value} ) =>{
    const classes = useStyles();

    return (
        <Button 
        disabled={disabled}
        className={classes.button}
        onClick={handleAddClick}
        data-testid="button"
        >
            {value}
        </Button>    
    )
};

export default BTButton;
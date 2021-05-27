import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import clearImg from "images/clear-24-px.svg";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { addExpense } from "js/services/ExpenseService";

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        left: props => props.left,
        top: props => props.top,
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        width: '560px',
        height: '555px',
        border: 'solid 1px rgba(255, 255, 255, 0)',
        borderRadius: '14px',
    },
    dim: {
        position: 'absolute',
        left:"0px",
        top:"0px",
        width: "1940px",
        height: "1300px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 2,
        display: props => props.display,
    },
    addtransaction: {
        position: 'absolute',
        left: '30px',
        top: "18px",
        width: "350px",
        height: "44px",
        fontFamily: "Inter,sans-serif",
        fontSize: "30px",
        fontWeight: "bold",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.47",
        letterSpacing: "normal",
        color: "#344563",
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
    clear: {
        position: 'absolute',
        right: '30px',
        top: "28px",
        width: "24px",
        height: "24px",
    },
    enteramount: {
        position: 'absolute',
        left: '30px',
        top: "100px",
        width: "500px",
        height: "43px",
        border: "0px solid",
        borderBottom: "1px solid rgb(47,79,79,0.4)",
        fontFamily: "Inter,sans-serif",
        fontSize: "20px",
        fontWeight: "normal",


    },
    select: {
        position: 'absolute',
        left: '30px',
        top: "211px",
        width: "235px",
        height: "36px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        backgroundColor: "white",
        color: "#344563",
        boxShadow: "0 0 0 2px #e1e7ed",
        border: "0",
        borderRadius: "7px",
    },
    selectcat: {
        position: 'absolute',
        left: '295px',
        top: "211px",
        width: "235px",
        height: "36px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        backgroundColor: "white",
        color: "#344563",
        boxShadow: "0 0 0 2px #e1e7ed",
        border: "0px",
        borderRadius: "7px",
    },
    datepick: {
        position: 'absolute',
        left: '30px',
        top: "293px",
        width: "210px",
        height: "32px",
        fontFamily: "Inter,sans-serif",
        fontSize: "16px",
        fontWeight: "normal",
        color: "#344563",
        boxShadow: "0 0 0 2px #e1e7ed",
        border: "0px",
        borderRadius: "7px",

    },
    selectper: {
        position: 'absolute',
        left: '30px',
        top: "385px",
        width: "138px",
        height: "36px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "#344563",
        boxShadow: "0 0 0 2px #e1e7ed",
        border: "0px",
        borderRadius: "7px",
    },
    transtype: {
        position: 'absolute',
        left: '30px',
        top: "165px",
        width: "235px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
        color: "#5e6c84",


    },
    category: {
        position: 'absolute',
        left: '295px',
        top: "165px",
        width: "235px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
        color: "#5e6c84",


    },
    dateoftrans: {
        position: 'absolute',
        left: '30px',
        top: "247px",
        width: "235px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
        color: "#5e6c84",


    },
    timeper: {
        position: 'absolute',
        left: '30px',
        top: "339px",
        width: "235px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "normal",
        color: "#5e6c84",


    },
    tophr: {
        position: 'absolute',
        top: "80px",
        left: "0px",
        width: "560px",
        borderTop: "0.1px solid #c4c7cc",
        borderBottom: "0px solid red",
    },
    bottomhr: {
        position: 'absolute',
        top: "481px",
        left: "0px",
        width: "560px",
        height: "0.1px",
        borderTop: "0.1px solid #c4c7cc",
        borderBottom: "0px solid red",
    },
    save: {
        position: 'absolute',
        top: "501px",
        left: "434px",
        width: "96px",
        height: "36px",
        backgroundColor: "#1c284d",
        color: "#ffffff"
    },
    option: {
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        color: "#5e6c84",
    },

});

export default function AddTransaction(props) {
    const classes = useStyles(props);
    const [amount, setAmount] = useState("");
    const [transtype, setTranstype] = useState("Expense");
    const [category, setCategory] = useState("No Category");

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
            month = '0' + (today.getMonth() + 1);
        } else {
            month = today.getMonth() + 1;
        }
        let retdate = today.getFullYear() + '-' + (month) + '-' + day;
        return retdate;
    };

    const [date, setDate] = useState(getToday());
    const [period, setPeriod] = useState("NONE");

    const setDefaults = () =>{
        props.addClick("None");
        setAmount("");
        setTranstype("Expense");
        setCategory("No Category");
        setDate(getToday());
        setPeriod("NONE");
    }

    const save = () => {
        let cat;
        if (transtype == "Expense") {
            cat = "debit";
        } else {
            cat = "credit";
        }
   
        if (amount != null) {
            addExpense(category,cat,amount,period,date).then(response =>{
                if(response){
                    console.log("expense saved");
                    setDefaults();
                    props.update();
                }
            })
        }
    };


    const validate = (value) => {
        if (!value.match(/^-{0,1}\d+$/)) {
            setAmount(value.substring(0, value.length - 1));
        }
    };

    const listCategories = () => {
        let cats = [];
        let categories = props.categories;
        if(transtype === "Expense"){
        for (let i in categories) {

            cats.push(<MenuItem className={classes.option} value={categories[i].name} selected>{categories[i].name}</MenuItem>)
        }
        return cats;
        }
        else{
            cats.push(<MenuItem className={classes.option} value={"Scholarship"} selected>Scholarship</MenuItem>)
            cats.push(<MenuItem className={classes.option} value={"Pocket Money"} selected>Pocket Money</MenuItem>)
            cats.push(<MenuItem className={classes.option} value={"Internship"} selected>Internship</MenuItem>)
            cats.push(<MenuItem className={classes.option} value={"Stipend"} selected>Stipend</MenuItem>)
            return cats;
        }
    };

    return (
        <Grid container className={classes.dim} >
            <Card className={classes.root}>
                <CardContent>
                    <form >
                        <div className={classes.addtransaction}>
                            Add Transaction
                    </div>
                        <hr className={classes.tophr}></hr>
                        <div className={classes.clear} >
                            <img data-testid="closeDialog" src={clearImg} onClick={() => props.addClick("None")} />
                        </div>

                        <Grid container >
                            <input data-testid="amount" type="text" placeholder="Enter Amount" className={classes.enteramount}
                                value={amount} onChange={e => setAmount(e.currentTarget.value)} onKeyUp={e => validate(e.currentTarget.value)} />
                        </Grid>
                        <Grid container >
                            <p className={classes.transtype}>TRANSACTION TYPE</p>
                            <Select variant="outlined" className={classes.select} data-testid="type" onChange={e => { setTranstype(e.target.value); }} value={transtype} >
                                <MenuItem className={classes.option} value="Expense">Expense</MenuItem>
                                <MenuItem className={classes.option} value="Income"  >Income</MenuItem>

                            </Select>

                            <p className={classes.category}>CATEGORIES</p>
                            <Select variant="outlined" className={classes.selectcat} data-testid="category" onChange={e => setCategory(e.target.value)} value={category} >
                                <MenuItem value="No Category" selected className={classes.option} >No Category</MenuItem>
                                {listCategories()}
                            </Select>

                        </Grid>
                        <Grid container >
                            <p className={classes.dateoftrans}>DATE OF TRANSACTION</p>

                            <input type="date" placeholder="Choose a date" className={classes.datepick}
                                value={date} onChange={e => setDate(e.currentTarget.value)} max={getToday()} />
                        </Grid>
                        <Grid container >
                            <p className={classes.timeper}>TIME PERIOD</p>
                            <Select
                                variant="outlined" value="age" className={classes.selectper} data-testid="period" onChange={e => setPeriod(e.target.value)} value={period}  >
                                <MenuItem className={classes.option} value="NONE" selected >NONE</MenuItem>
                                <MenuItem className={classes.option} value="DAILY" >DAILY</MenuItem>
                                <MenuItem className={classes.option} value="WEEKLY" >WEEKLY</MenuItem>
                                <MenuItem className={classes.option} value="MONTHLY" >MONTHLY</MenuItem>
                                <MenuItem className={classes.option} value="YEARLY" >YEARLY</MenuItem>
                            </Select>

                        </Grid>
                        <hr className={classes.bottomhr}></hr>
                        <Button disabled={amount.length > 0 ? false : true} data-testid="saveButton" variant="contained" className={classes.save} onClick={() => save()} >
                            Save
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </Grid>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import imgloc from 'images/phone-android-24-px.svg';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        marginTop:"20px",
        width: "304px",
        height: "44px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.57",
        letterSpacing: "normal",
        textAlign: "right",
        boxShadow:"0 0 0 0",

       
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        position: 'absolute',
        top:"0px",
        left:"48px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
       
        lineHeight: "1.57",      
        color: "#344563",
    },
    message: {
        position: 'absolute',
        left:"48px",
        bottom:"0px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "1.57",      
        color: "#344563",
    },
    amount: {
        position: 'absolute',
         left:"230px",
        fontFamily: "Inter,sans-serif",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "1.57",      
        color: "#344563",
    },
    image: {
        position: 'absolute',
         left:"0px",
        top:"0px",
        width: "40px",
        height: "40px",
        borderRadius: "32px",
        backgroundColor:"#eaf0f6",        
    },
    imgholder: {
        width: "24px",
        height: "24px",
        objectFit: "contain",
        padding:"10px"
    },
   
   
    
});

export default function TCard(props) {
    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            <CardContent>
            
            <Grid container className={classes.image}>
                    <img src={imgloc} className={classes.imgholder}/>
                </Grid>
                <Grid container className={classes.title}>
                    {props.title}
                </Grid>
                <Grid container className={classes.message}>
                    {props.message}
                </Grid>
                <Grid container className={classes.amount}>
                    {props.amount}
                </Grid>


            </CardContent>
        </Card>
    );
}

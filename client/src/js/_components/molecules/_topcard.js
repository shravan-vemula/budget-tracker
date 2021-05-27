import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Amount from "js/_components/atoms/_amount";
import Icon from "js/_components/atoms/_icon";
import { myTheme } from 'theme';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '201px',
        height: '140px',
        borderRadius: '14px',
        left:"16%",
        textAlign:"center",
        marginBottom:"10%"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        position: 'absolute',
        top: '0%',
        left: '32%',
    },
    smtitle: {
        fontFamily: myTheme.typography.fontFamily.default,
        position: 'absolute',
        top: '22%',

        textAlign: 'center',
        width: '95%',
        color: myTheme.palette.secondary.main,
    },
    amount: {
        fontFamily: myTheme.typography.fontFamily.default,
        position: 'absolute',
        top: '20px',
        fontSize: "14px",
    },
    pertext: {
        position: 'absolute',
        top: '81px',
        left: '227px',

    },
    sptext: {
        width: '201px',
        height: '140px',

    },
    footerPrice: {
        fontFamily: myTheme.typography.fontFamily.default,
        marginLeft: '3px',
        fontSize: '16px',
        color: myTheme.palette.default.main,
    },
    currency: {
        position: 'absolute',
        top: '31px',
        textAlign: 'center',
        marginLeft: '-10px',
        fontSize: '30px',
        color: myTheme.palette.default.main,
    },
});

export default function TopCard(props) {
    const classes = useStyles(props);


    return (

        <Card className={classes.root} >
            <CardContent>
                <Grid container spacing={4} id="expenses" direction="column" justify="center" xs={12}  >
                    <Grid item className={classes.icon}  >
                        <Icon />
                    </Grid>
                    <Grid item className={classes.smtitle} >
                        <p>{props.title} </p>
                    </Grid>
                    <Grid item xs={12} className={classes.amount} >
                        <Grid container >
                            <Amount value={props.amount} />
                        </Grid>
                    </Grid>

                </Grid >
            </CardContent>
        </Card>

    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Amount from "js/_components/atoms/_amount";
import Icon from "js/_components/atoms/_icon";
import Smtitle from "js/_components/atoms/_smtitle";
import Pertext from "js/_components/atoms/_pertext";


const useStyles = makeStyles({
  root: {
      position: 'absolute',
      left: props=>props.left,
      top: props=>props.top,
    width: '296px',
    height: '172px',
    borderRadius: '14px',
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
      top: '24px',
      left: '24px',
  },
  smtitle: {
    position: 'absolute',
    top: '25px',
    left: '68px',
  },
  amount: {
    position: 'absolute',
    top: '-20px',
    left: '0px',
      
},
pertext: {
  position: 'absolute',
  top: '81px',
  left: '227px',
    
},
sptext: {
  position: 'absolute',
  top: '124px',
  left: '24px',
    
},
});

export default function PriceCard(props) {
  const classes = useStyles(props);


  return (
    <Card className={classes.root}>
    <CardContent>
        <Grid container className={classes.icon}>
      <Icon />
      </Grid>

      <Grid container className={classes.smtitle}>
      <Smtitle  title={props.title} /> <br />
      </Grid>
      <Grid container className={classes.amount} >
          <Amount  value={props.amount} /> 
       </Grid>

       <Grid container className={classes.pertext} >
       <Pertext value={props.pertext} />
       </Grid>

       <Grid container className={classes.sptext}> 
       <p>{props.statustext} </p>
       </Grid> 
   
    </CardContent>
    </Card>
  );
}

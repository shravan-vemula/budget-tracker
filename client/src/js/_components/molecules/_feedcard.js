import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
  root: {
      position: 'relative',
      
      width: '332px',
      height: '230px',
      border: 'solid 1px rgba(255, 255, 255, 0)',
      borderRadius: '14px',
  },




  list:{
    marginTop: "0% !important",
    paddingLeft: "5%"
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  feeds: {
    width: "59px",
    height:"30px",
    fontFamily: "Inter,sans-serif",  
    fontSize: "20px",  
    fontWeight: "bold",  
    lineHeight: "1.5",  
    color: "#344563",
  },
  feeddata: {
    position: 'relative',
      marginTop:"0% !important",
      fontFamily: "Inter,sans-serif",
      fontSize: "14px",    
      lineHeight: "1.57",    
      color: "#5e6c84",
  },
  
});

export default function FeedCard(props) {
  const classes = useStyles(props);


  return (
    <Card className={classes.root}>
    <CardContent>
        <Grid container className={classes.feeds}>
        Feeds
      </Grid>
      <Grid container className={classes.feeddata}>
        <ul id="feed-data" className={classes.list}>
        <li ><p>You have spent 100% of the Food & Groceries budget,
      but there are still 8 days remaining. </p>
        </li>
      <li> <p>You have spent 100% of the Food & Groceries budget,
      but there are still 8 days remaining. </p>
      </li>
      </ul>
      </Grid>
         
    </CardContent>
    </Card>
  );
}

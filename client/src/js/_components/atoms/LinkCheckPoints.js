import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    LinkText : {
        display:"inline-block",
        float:"right",
        textAlign:"left",
        position: "relative",
        top: "6%"
    },
    circleSize:{
        width:"20px !important",
        height:"8px !important",
        color:"green"
    },

    checkpointText:{
        marginLeft:"8px",
    }
  }));
  


function LinkCheckPoints() {
    const classes = useStyles();

    const [secureProgress, setSecureProgress] = React.useState(10);
    const [signinProgress, setSigninProgress] = React.useState(0);
    const [downloadProgress, setDownloadProgress] = React.useState(0);
  

    

    React.useEffect(() => {
    const timer1 = setInterval(() => {
        setSecureProgress((prevSecureProgress) => (prevSecureProgress >= 100 ? 100: prevSecureProgress + 50));
      }, 160);
  
      const timer2 = setInterval(() => {
        setSigninProgress((prevSigninProgress) => (prevSigninProgress >= 100 ? 100 : prevSigninProgress + 20));
        
      }, 320);
  
      const timer3 = setInterval(() => {
        setDownloadProgress((prevDownloadProgress) => (prevDownloadProgress >= 90 ? 100 : prevDownloadProgress + 30));
       
      }, 640);
  
    
      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }, []);


    return (
        <div id="checkpoints-text" className={classes.LinkText}  style={{fontFamily:"Inter,sans-serif"}}>
            <div><CircularProgress className={classes.circleSize} variant="static" value={secureProgress} />   <span className={classes.checkpointText}>Securing Connection</span></div> 
                <br />
                <br />
                <div><CircularProgress className={classes.circleSize} variant="static" value={signinProgress} /> <span className={classes.checkpointText}> Signing in</span></div>
                <br />
                <br />
                <div><CircularProgress className={classes.circleSize} variant="static" value={downloadProgress} /> <span className={classes.checkpointText}> Downloading Transactions</span> </div>

        </div>
    )
}

export default LinkCheckPoints

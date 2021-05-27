import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import COLORS from 'js/utils/colors';

const useStyles = makeStyles((theme) => ({

  circle : {
   color:COLORS.green
  },


}))

function CircularProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box position="relative"
    height={170}
    width={170}
    display="flex"
    className={classes.circle}
     display="inline-flex">
      <CircularProgress className={classes.circle} variant="static" {...props} />
      </Box>
   
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularProgressForLink() {
  const [progress, setProgress] = React.useState(30);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 96 ? 100 : prevProgress + 33));
      
    }, 1600);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel size={200} value={progress} />;
}
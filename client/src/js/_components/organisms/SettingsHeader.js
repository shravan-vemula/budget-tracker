import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BtrackerLogo from "images/Btracker.png";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 10,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SettingsHeader() {
  const classes = useStyles();
  const [onClick, setOnClick] = React.useState(false);

  const handleClick = () => {
    setOnClick(true);
  };

  if (onClick === true) {
    return <Redirect to="/home/overview" />;
  }

  return (
    <div className={classes.root}>
      <div id="logo" className="logoBtracker">
        <img
          id="img-click"
          src={BtrackerLogo}
          onClick={handleClick}
          className="BtrackerIcon"
        />
      </div>
    </div>
  );
}

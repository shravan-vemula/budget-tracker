import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuList from "js/_components/organisms/MenuList";

const useStyles = makeStyles((theme) => ({
  iconStyles: {
    paddingTop: "5px",
    paddingRight: "35px",
    width: "20px",
    height: "20px",
  },
}));

const HeaderIcons = () => {
  const classes = useStyles();
  return (
    <div>
      <IconButton color="inherit" className={classes.iconStyles}>
        <HelpOutlineIcon color="disabled" />
      </IconButton>

      <IconButton color="inherit" className={classes.iconStyles}>
        <NotificationsNoneIcon color="disabled" />
      </IconButton>

      <IconButton>
        <MenuList />
      </IconButton>
    </div>
  );
};

export default HeaderIcons;

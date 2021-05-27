import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIconImage from "images/menu-icon.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    margin: "30%",
    height: "24px",
    width: "24px",
  },
}));

const MenuIcon = () => {
  const classes = useStyles();
  return (
    <div >
      <IconButton className={classes.menuIcon} color="inherit" edge="start">
        <img src={MenuIconImage} />
      </IconButton>
    </div>
  );
};

export default MenuIcon;

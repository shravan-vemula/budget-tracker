import React, {  useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import AvatarIcon from "js/_components/atoms/AvatarIcon";
import auth from "js/auth/initAuth";

const useStyles = makeStyles((theme) => ({
  MenuItems: {
    padding: "20px",
    color: "#3e3f42",
    width: "187px",
    height: "23px",
    fontSize: "8px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.4",
    letterSpacing: "0.15px",
  },
}));

const StyledMenu = withStyles({
  paper: {
    width: "295px",
    height: "200px",
    borderRadius: "4px",
    border: " solid 1px rgba(255, 255, 255, 0)",
  },
})((props) => (
  <Menu
    elevation={1}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

function MenuList() {
  const [username, setUsername] = useState("");
  const email = localStorage.getItem("user_email");
  let firstName = email.split("@")[0];
  let firstChar = firstName.charAt(0).toUpperCase();
  let lastName = firstName.split(".")[1];
  if (lastName === undefined) {
    lastName = "";
  }

  let secondChar = lastName.charAt(0).toUpperCase();
  if (username === "") {
    setUsername(firstChar + secondChar);
  }
  const history = useHistory();
  const classes = useStyles();

  const handleClick2 = () => {
    history.push("/settings");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    auth.logout();
  };

  return (
    <div>
      <Avatar
        id="avatar-click"
        aria-controls="MenuList"
        aria-haspopup="true"
        onClick={handleClick}
        props={{ spacing: 50 }}
        data-testid="Avatar"
      >
        {username}
      </Avatar>

      <StyledMenu
        id="MenuList"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemAvatar>
            <AvatarIcon props={{ spacing: 50 }} />
          </ListItemAvatar>
          <ListItemText primary={email} />
        </StyledMenuItem>
        <div style={{ paddingBottom: "20px" }}></div>
        <Divider />
        <StyledMenuItem
          id="profile-click"
          onClick={handleClick2}
          className={classes.MenuItems}
        >
          <ListItemText primary="Profile & Settings" />
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem
          className={classes.MenuItems}
          onClick={handleLogoutClick}
          style={{ fontWeight: "500" }}
        >
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
export default MenuList;

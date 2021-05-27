import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import axios from "axios";
import {putUserDetails} from "js/services/UserServices";
import { myTheme } from "theme";

const theToken = localStorage.getItem("access_token");
const userEmail = localStorage.getItem("user_email");

const BasicProfileInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    width: "300px",
    fontSize: 15,
    padding: "12px 18px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
      fontFamily: myTheme.typography.fontFamily.default,
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: myTheme.typography.fontFamily.default,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function EditTextFields() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    async function innerFunction() {
      const response = await axios.get("http://localhost:8081/details/1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + theToken,
        },
      });
      setUserId(response.data.userId);
      setName(response.data.name);
      setPhoneNo(response.data.phone);
      setCountry(response.data.country);
    }
    innerFunction();
  }, []);

  const data={
    id: 1,
    name: name,
    email: userEmail,
    userId: userId,
    phone: phone,
    country: country,
    createdAt: null,
    createdBy: null,
    modifiedAt: null,
    modifiedBy: null,
    userProfileSettingsDto: null,
    deleted: false,
  }
  
    const submitForm = () => {
      putUserDetails(data)
     
    };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div data-testid="editFields">
      <div>
        <Button
          id="button-click"
          color="primary"
          fontWeight="500"
          type="button"
          fontFamily="myTheme.typography.fontFamily.default"
          onClick={handleClickOpen}
        >
          Edit
        </Button>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit User Details
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <form className={classes.root} noValidate>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl className={classes.margin}>
                  <InputLabel
                    shrink
                    htmlFor="basicprofile-input"
                    className={classes.InputField}
                    style={{ fontSize: "16px" }}
                    style={{
                      fontWeight: "500",
                      fontFamily: myTheme.typography.fontFamily.default,
                    }}
                  >
                    FULL NAME
                  </InputLabel>
                  <BasicProfileInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="username"
                    style={{
                      fontFamily: myTheme.typography.fontFamily.default,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl className={classes.margin}>
                  <InputLabel
                    shrink
                    htmlFor="basicprofile-input"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: myTheme.typography.fontFamily.default,
                    }}
                  >
                    MOBILE NUMBER
                  </InputLabel>
                  <BasicProfileInput
                    value={phone}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    id="mobile-number"
                  />
                </FormControl>
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl className={classes.margin}>
                  <InputLabel
                    shrink
                    htmlFor="basicprofile-input"
                    style={{ fontSize: "16px" }}
                  >
                    COUNTRY
                  </InputLabel>
                  <BasicProfileInput
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    id="country"
                  />
                </FormControl>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={submitForm}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

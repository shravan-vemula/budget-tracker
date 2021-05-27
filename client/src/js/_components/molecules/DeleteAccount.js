import React from "react";
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
import { myTheme } from "theme";
import COLORS from "js/utils/colors";

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

export default function DeleteAccount() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-testid="deleteAccount">
      <div>
        <Button
          id="button-click"
          color="primary"
          fontWeight="{500}"
          type="button"
          fontFamily="myTheme.typography.fontFamily.default"
          onClick={handleClickOpen}
        >
          Delete my account permanently
        </Button>
        <div style={{ paddingTop: "20px" }}></div>
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{
            color:COLORS.hexgrey,
            fontFamily: myTheme.typography.fontFamily.default,
          }}
        >
          {/* You will recieve email to confirm you decision
        <div style={{ paddingBottom: "20px" }}></div> */}
          If you delete the account data will be permanently erased ,so please
          turn on sync data to keep your files safe.
        </InputLabel>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Delete Account
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
                    style={{ color: "black", fontSize: "17px" }}
                  >
                    Enter email id for confirmation
                  </InputLabel>
                  <BasicProfileInput value="" id="emailId" />
                </FormControl>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="red">
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

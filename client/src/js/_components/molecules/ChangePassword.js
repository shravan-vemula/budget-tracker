import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { myTheme } from "theme";
import COLORS from "js/utils/colors";
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
  passwordText:{
    width: "100%"
},
 changeButton : {
  display:"inline-block",
  float : "right"
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
    width: "300px",
    height: "200px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ChangePassword() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div style={{ alignItems: "center" }} data-testid="changePassword">
      <div className={classes.passwordText}>
        <span style={{ color: "black", fontWeight: "bold", fontFamily: myTheme.typography.fontFamily.default,
          float:'right',  fontSize:"16px"}}> <Button
          id="button-click"
          color="primary"
          fontWeight="500"
          type="button"
          fontFamily="Inter,san-serif"
          fontSize='16px'
          onClick={handleClickOpen}
        >
          Change
        </Button></span>
        <div >
        <span style={{color:COLORS.hexgrey, fontWeight: "bold", fontFamily: myTheme.typography.fontFamily.default,
          float:'left',  fontSize:"16px"}}> Password</span>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div style={{ alignItems: "center" }}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Change Password
          </DialogTitle>
        </div>
        <DialogContent dividers>
          <div>
            <form className={classes.root} noValidate>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl margin="dense">
                  <InputLabel htmlFor="password-current" >
                    {"Current Password"}
                  </InputLabel>
                  <Input
                   
                    id="currentPassword"
                    type="password"
                   
                  
                  />
                  <FormHelperText >
                  
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl margin="dense">
                  <InputLabel htmlFor="newpwdAgain-input" >
                    {"New Password"}
                  </InputLabel>
                  <Input
                    variant="outlined"
                   
                    id="newPassword"
                    type="password"
                
                   
                  />
                  <FormHelperText >
                  
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <FormControl margin="dense">
                  <InputLabel htmlFor="newpwd-input" >
                    {"Confirm Password"}
                  </InputLabel>
                  <Input
                    variant="outlined"
                   
                    id="reEnterPassword"
                    type="password"
                    
                   
                  />
                
                </FormControl>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            id="cancel-click"
            autoFocus
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            autoFocus
      
            color="primary"
           
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

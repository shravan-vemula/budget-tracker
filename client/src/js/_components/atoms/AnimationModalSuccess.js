import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Redirect,Link } from 'react-router-dom';
import CircularProgressForLink from './CircularProgressForLink';
import { makeStyles } from "@material-ui/core/styles";
import LinkCheckPoints from 'js/_components/atoms/LinkCheckPoints';


const useStyles = makeStyles((theme) => ({

  modalHeight : {
 
    height:"430px !important"
  },

  overViewButton : {
    position: "relative",
    top: "20%"
  }


}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AnimationModalSuccess(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const setOnCloseDialog = React.useState(true)
  const [onClickOverView,setOnClickOverView] = React.useState(false)
  const [onAddAccount,setOnAddAccount] = React.useState(false)


  const handleClose = () => {
    setOpen(false);
    console.log("closed and redirecting")
    setOnCloseDialog(true)
  };

  const handleButtonClick = () => {
    console.log("clicked on overview button")
    setOnClickOverView(true)
  }

  const handleAddAccount = () =>{
    console.log("add account clicked")
    setOnAddAccount(true)
  }

  if(onAddAccount){
    console.log("Add account is true")
    setOpen(false)
  }

  if(onClickOverView){
    console.log("overview is true")
    return <Redirect to = "/home/overview" />
  }



  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth = {'sm'}
        keepMounted
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{fontFamily:"Inter,sans-serif"}}

      >
        <DialogTitle id="alert-dialog-slide-title" style={{textAlign:"center" ,fontFamily:"Inter,sans-serif !important"}}>{`Linking to ${(props.placeHolder).split(" ")[1]} account`}</DialogTitle>
        <DialogContent className={classes.modalHeight} style={{textAlign:"center",fontFamily:"Inter,sans-serif !important"}}>
        
            <CircularProgressForLink />
            <LinkCheckPoints />
          <div id="overview-button" className={classes.overViewButton}  style={{fontFamily:"Inter,sans-serif"}}>
            <br />
            <Button variant="contained" data-testId="goToOverView" color="primary" onClick={handleButtonClick} > Go to overview</Button>
            <br />
            <br />
            <Link to="/SelectBank/BankTiles" ><span id="add-account" onClick={() => handleAddAccount}  data-testId="addAnotherAccount">Add another account </span> </Link>
          </div>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
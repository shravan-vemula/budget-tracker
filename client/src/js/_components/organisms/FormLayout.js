import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeaderForForm from 'js/_components/atoms/HeaderForForm';
import FormForSignup from 'js/_components/molecules/FormForSignup';
import AlreadySignedIn from 'js/_components/atoms/AlreadySignedIn';
import 'js/_components/form.css';
import 'js/_components/sign-up.css';
import logo from "images/Btracker.png";



function FormLayout() {


  return (
    <React.Fragment>
       <AlreadySignedIn />
    <div className="form-layout" style={{fontFamily:"Inter,sans-serif"}}>
      <CssBaseline />
     
 
      <div id="budget-tracker-heading" align="center" className="budgetTrackerHeading" style={{fontFamily:"Inter,sans-serif"}}>
        <img src={logo} alt="Logo" height="100%" width="80%" ></img>
        </div>

      <Container maxWidth="sm" className="form-div">

        <Typography component="div" style={{ height: 'auto',marginBottom: "10%"}} style={{fontFamily:"Inter,sans-serif"}}>
        <HeaderForForm heading='Create an Account' />
        <FormForSignup />
        </Typography>
      </Container>

    </div>
    </React.Fragment>
  );
}

export default FormLayout;
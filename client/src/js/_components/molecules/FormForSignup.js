import React, { Component } from "react";
import TextFields from "../atoms/TextFields";
import TextPasswordField from "../atoms/TextPasswordField";
import { Button } from "@material-ui/core";
import ConfirmPassword from "../atoms/ConfirmPassword";
import LockIcon from "@material-ui/icons/Lock";
import auth from 'js/auth/initAuth';

export class FormForSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorEmail: false,
      errorPassword: false,
      confirmPassword: false,
    };
  }


  handleSubmit(event) {
    if (
      !(
        this.state.errorEmail &&
        this.state.errorPassword &&
        this.state.confirmPassword
      )
    ) {
      console.log(
        this.state.errorEmail +
          "       " +
          this.state.errorPassword +
          "        " +
          this.state.confirmPassword
      );
      alert("enter valid details");
      event.preventDefault();
      return;
    } else {
      const email = document.getElementById("standard-required-emailId").value;
      const password = document.getElementById("standard-password-input").value;
      auth.signup(email,password);
     

    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="FormForSignup" className="signup-form">
          <form
            data-testid="formSubmit"

          >
            <TextFields
              value="Email Address"
              useCase="EmailId"
              state={this.state}
            />
            <TextPasswordField
              value="Password"
              state={this.state}
            ></TextPasswordField>
            <ConfirmPassword state={this.state} />
            {/* <TextPasswordField value="confirm password" /> */}
            <div className="submitButton">
      
                <Button
                  onClick={(e) => this.handleSubmit(e)}
                  data-testId="submitButton"
                  variant="contained"
                  color="primary"
                >
                  <span id="lockIcon">
                    <LockIcon />
                  </span>{" "}
                  Create account
                </Button>
           
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormForSignup;

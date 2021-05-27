import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from 'src/App.js';
import FormLayout from 'js/_components/organisms/FormLayout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import FormForSignup from 'js/_components/molecules/FormForSignup';
import TextFields from 'js/_components/atoms/TextFields';
import TextPasswordField from 'js/_components/atoms/TextPasswordField';
import ConfirmPassword from 'js/_components/atoms/ConfirmPassword';
import AnimantionModalSuccess from 'js/_components/atoms/AnimationModalSuccess';

afterEach(cleanup)

it('renders without crashing',() => {
    const div = document.createElement('div');
    ReactDOM.render(<App />,div);
})

describe('FormLayout', () =>{
    test('renders form layout', () =>{
        render(<Router><FormLayout /></Router>);
        expect(screen.getByText('Create an Account')).toBe;
        expect(screen.getByText('Already have an account?')).toBe;
        expect(screen.getByRole('img')).toBe;
    })
})

describe('FormLayout', () =>{

    it("renders confirm Password field correctly", () => {
        const wrapper = shallow(
            <FormLayout /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

    it("Form renders correctly", () => {
        const wrapper = shallow(
            <FormForSignup />
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders Email text box correctly", () => {
        const wrapper = shallow(
            <TextFields value='Email Address' useCase="EmailId" />
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders Password field correctly", () => {
        const wrapper = shallow(
            <TextPasswordField value="Password" /> 
        );
        expect(wrapper).toMatchSnapshot();
      });


      it("renders confirm Password field correctly", () => {
        const wrapper = shallow(
            <ConfirmPassword /> 
        );
        expect(wrapper).toMatchSnapshot();
      });
    

    test('renders form layout', () =>{
        render(<Router><FormForSignup /></Router>);
        expect(screen.getByText('Email Address')).toBe;
        expect(screen.getByText('Password')).toBe;
        expect(screen.getByText('Confirm Password')).toBe;
        expect(screen.getByRole('button')).toBe;
    })

    


    it("should have textfield and validations are implemented",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: "@gmail.com" }
        });
        expect(screen.getByText('Enter a Valid EmailId')).toBe;
    });

    it("should have textfield and validations are implemented",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: "kausik@gmail.com" }
        });
    });

    it("should have textfield and validations are implemented",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: " " }
        });
        expect(screen.getByText('Enter a Valid EmailId')).toBe;
    });

    it("should have textfield and validations are implemented",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: "" }
        });
    });

    it("password valid",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("passwordField")).toBe;
        fireEvent.blur(getByTestId("passwordField"), {
            target: { value: "Theracer2!" }
        });
        screen.debug();
        expect(screen.getByText('Password is strong')).toBe;
    });

    it("should have confirm password",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("confirmPassword")).toBe;
        fireEvent.blur(getByTestId("confirmPassword"), {
            target: { value: "com" }
        });
        expect(screen.getByText('Does not match with given password')).toBe;
    });

    it("password strength validation",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("passwordField")).toBe;
        fireEvent.change(getByTestId("passwordField"), {
            target: { value: "com" }
        });
        
    });


    it("password and confirm password Match",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("passwordField")).toBe;
        fireEvent.change(getByTestId("passwordField"), {
            target: { value: "Theracer2!" }
        });
        expect(getByTestId("confirmPassword")).toBe;
        fireEvent.change(getByTestId("confirmPassword"), {
            target: { value: "Theracer2!" }
        });
        expect(screen.getByText('Password is strong')).toBe;
        expect(screen.getByText('Matches with the given password')).toBe;
    });

    it("password and confirm password Match",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("passwordField")).toBe;
        fireEvent.blur(getByTestId("passwordField"), {
            target: { value: "Theracer2!" }
        });
        expect(getByTestId("confirmPassword")).toBe;
        fireEvent.blur(getByTestId("confirmPassword"), {
            target: { value: "Theracer2!" }
        });
        expect(screen.getByText('Password is strong')).toBe;
        expect(screen.getByText('Does not match with given password')).toBe;
    });

    it("Form Submit",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: "kausik@gmail.com" }
        });
        
        expect(getByTestId("passwordField")).toBe;
        fireEvent.blur(getByTestId("passwordField"), {
            target: { value: "Theracer2!" }
        });
        expect(getByTestId("confirmPassword")).toBe;
        fireEvent.blur(getByTestId("confirmPassword"), {
            target: { value: "Theracer2!" }
        });


        expect(getByTestId("formSubmit")).toBe;
        fireEvent.submit(getByTestId("formSubmit"))

        expect(getByTestId("submitButton")).toBe;
        fireEvent.click(getByTestId("submitButton"))




    });

    it("Form Submit error",() =>{
        const { getByTestId } =  render(<Router><FormForSignup /></Router>);
        expect(getByTestId("textField")).toBe;
        fireEvent.blur(getByTestId("textField"), {
          target: { value: "@gmail.com" }
        });
        expect(getByTestId("passwordField")).toBe;
        fireEvent.change(getByTestId("passwordField"), {
            target: { value: "Theracer2!" }
        });
        expect(getByTestId("confirmPassword")).toBe;
        fireEvent.change(getByTestId("confirmPassword"), {
            target: { value: "Theracer2!" }
        });

        expect(getByTestId("formSubmit")).toBe;
        fireEvent.submit(getByTestId("formSubmit"))

        expect(getByTestId("submitButton")).toBe;
        fireEvent.click(getByTestId("submitButton"))

    });


    

})



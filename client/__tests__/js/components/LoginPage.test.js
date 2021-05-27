import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import LoginPage from 'js/_components/organisms/LoginPage';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/example/path",
      state:{
        logo: '' ,
        placeHolder : 'Enter paytm id'
      }
    })
  }));


describe('LoginPage renders properly', () => {

    it("renders LoginPage correctly and valid login details", () => {
        const {getByTestId} = render(<Router><LoginPage /></Router>);
        expect(getByTestId("LoginSubmit")).toBe;
        expect(getByTestId("username")).toBe;
        expect(getByTestId("password")).toBe;
        expect(getByTestId("SigninButton")).toBe;
        fireEvent.change(getByTestId('username'),{
            target:{value : 'kaushik@gmail.com'}
        })
        fireEvent.change(getByTestId('password'),{
            target:{value : 'kaushik'}
        })
        fireEvent.click(getByTestId('SigninButton'))
        fireEvent.submit(getByTestId('LoginSubmit'))
      });

      it("Invalid login details", () => {
        const {getByTestId} = render(<Router><LoginPage /></Router>);
        expect(getByTestId("LoginSubmit")).toBe;
        expect(getByTestId("username")).toBe;
        expect(getByTestId("password")).toBe;
        expect(getByTestId("SigninButton")).toBe;
        fireEvent.click(getByTestId('SigninButton'),{
            target:{value : 'kaushik@gmail.com'}
        })
        fireEvent.click(getByTestId('password'),{
            target:{value : 'ka'}
        })
        fireEvent.click(getByTestId('SigninButton'))
        fireEvent.submit(getByTestId('LoginSubmit'))
      });
    

})




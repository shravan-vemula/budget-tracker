import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import BankPageRedirect from 'js/_components/molecules/BankPageRedirect';
import SbiLogo from 'images/sbi.jpg';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/example/path",
      state:{
        logo: '' ,
        url : 'https://retail.onlinesbi.com/retail/login.htm'
      }
    })
  }));

describe('BankPageRedirect renders properly', () => {
    const {getByTestId} = render(<Router><BankPageRedirect /></Router>);
    expect(getByTestId("continueButton")).toBe;
    fireEvent.click(getByTestId('continueButton'))
})


it("renders BankSelection correctly", () => {
    const wrapper = shallow(
        <BankPageRedirect /> 
    );
    expect(wrapper).toMatchSnapshot();
  });

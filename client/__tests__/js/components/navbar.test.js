import React from 'react';
import NavBar from 'js/_components/organisms/Navbar';
import { render, screen, fireEvent, getByRole, getByTestId } from '@testing-library/react';
import {BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import BankPageRedirect from 'js/_components/molecules/BankPageRedirect';
import { createMemoryHistory } from "history"
import LoginPage from 'js/_components/organisms/LoginPage';




describe('Navbar renders correctly', () =>{
    test('renders form layout', () =>{
       const {getByTestId} = render(<Router><NavBar /></Router>);
        expect(screen.getByRole('img')).toBe;
        fireEvent.click(getByTestId('LogoImg'))
        screen.debug();
    })
    it("navbar snap shot", () => {
        const wrapper = shallow(<MemoryRouter><BankPageRedirect /> </MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
      });

    
});

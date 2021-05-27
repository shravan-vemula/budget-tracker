import React from 'react';
import { render, screen, fireEvent ,cleanup} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SideText1 from 'js/_components/atoms/SideText1';
import SideText from 'js/_components/organisms/SideText';
import BankSelectionLayout1 from 'js/_components/molecules/BankSelectionLayout1';
import BankSelection from 'js/_components/organisms/BankSelection';
import BankSelectionLayout2 from 'js/_components/molecules/BankSelectionLayout2';
import SideText2 from 'js/_components/atoms/SideText2';
import SideText3 from 'js/_components/atoms/SideText3';
import BankSelectionHeaderText from 'js/_components/atoms/BankSelectionHeaderText';
import BankTiles from 'js/_components/organisms/BankTiles';

const fetch = jest.fn();
global.fetch = fetch;

beforeEach(() => {
  fetch.mockClear();

  fetch.mockResolvedValue({
    key: "value", // return value on fetch resolve
  });
});

jest.mock("js/services/BankService", () => ({
  __esModule: true,
  default: () => <span>Bank Service</span>,
}));


afterEach(cleanup);

describe('FormLayout', () =>{
  
    it("renders BankSelection correctly", () => {
        const wrapper = shallow(
            <BankSelection /> 
        );
        expect(wrapper).toMatchSnapshot();
      });


    it("renders BankSelectionLayout1 correctly", () => {
        const wrapper = shallow(
            <BankSelectionLayout1 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });
      
      it("renders BankSelectionLayout2 correctly", () => {
        const wrapper = shallow(
            <BankSelectionLayout2 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText correctly", () => {
        const wrapper = shallow(
            <SideText /> 
        );
        expect(wrapper).toMatchSnapshot();
      });
      it("renders SideText1 correctly", () => {
        const wrapper = shallow(
            <SideText1 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText2 correctly", () => {
        const wrapper = shallow(
            <SideText2 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText3 correctly", () => {
        const wrapper = shallow(
            <SideText3 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders BankSelectionHeaderText correctly", () => {
        const wrapper = shallow(
            <BankSelectionHeaderText /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it('Bank tiles test',() =>{
        const {getByTestId} = render(<Router><BankTiles /> </Router>)
        expect(screen.getByTestId('tileCLick')).toBe
        fireEvent.click(getByTestId('tileCLick'))
      
      })
    
   
    
      });
    
     
 
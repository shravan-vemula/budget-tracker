import React from 'react';
import {cleanup} from '@testing-library/react';
import AmountField from 'js/_components/atoms/_amount-field';

afterEach(cleanup)

const setBudgetValue = jest.fn();

describe("Menu Icon Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow( <AmountField
            setBudgetValue={setBudgetValue}
            label="Enter Amount"
            budgetValue="500"
          />);
        expect(wrapper).toMatchSnapshot();
      });


});
import React from 'react';
import {render,cleanup} from '@testing-library/react';
import AddBudgetCard from 'js/_components/molecules/_add-budget-card';
import{ BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

describe("Add Budget Card Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<AddBudgetCard />);
        expect(wrapper).toMatchSnapshot();
      });

    it("should have all the icons", ()=>{
        const{ getByRole } = render(<AddBudgetCard />);
        expect(getByRole("img")).toBe;
    });
    it("should have heading",() =>{
        const{ getByText } = render(<AddBudgetCard />);
        expect(getByText("Add budget")).toBe;
    });

});
import React from 'react';
import {render,cleanup} from '@testing-library/react';
import ExpenseChart from 'js/_components/molecules/_expensechart';

afterEach(cleanup)

describe("Expense Chart  Component",()=>{
    const data=[
        {name:"Junly 09",expense:1000,budget:1000}
    ];
    it("renders correctly", () => {
        const wrapper = shallow(<ExpenseChart data={data}/>);
        
        expect(wrapper).toMatchSnapshot();
        
        

      });

   
});
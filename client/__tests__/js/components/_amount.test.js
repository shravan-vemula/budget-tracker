import React from 'react';
import {render,cleanup} from '@testing-library/react';
import Amount from 'js/_components/atoms/_amount';

afterEach(cleanup)

describe("Amount Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<Amount />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
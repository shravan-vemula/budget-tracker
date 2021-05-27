import React from 'react';
import {cleanup} from '@testing-library/react';
import BTButton from 'js/_components/atoms/_btbutton';

afterEach(cleanup)


describe("BTButton Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow(<BTButton />);
        expect(wrapper).toMatchSnapshot();
      });


});
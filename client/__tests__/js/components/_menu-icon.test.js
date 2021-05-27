import React from 'react';
import {cleanup} from '@testing-library/react';
import MenuIcon from 'js/_components/atoms/_menu-icon';

afterEach(cleanup)


describe("Menu Icon Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow(<MenuIcon />);
        expect(wrapper).toMatchSnapshot();
      });


});
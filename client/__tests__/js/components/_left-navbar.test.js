import React from 'react';
import {render,cleanup} from '@testing-library/react';
import LeftNavBar from 'js/_components/organisms/_left-navbar';


afterEach(cleanup)


describe("LeftNavBar Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow(<LeftNavBar />);
        expect(wrapper).toMatchSnapshot();
      });

 

});
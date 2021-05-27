import React from 'react';
import {render,cleanup} from '@testing-library/react';
import Pertext from 'js/_components/atoms/_pertext';

afterEach(cleanup)

describe("Pertext Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<Pertext />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
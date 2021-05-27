import React from 'react';
import {cleanup} from '@testing-library/react';
import BTCheckbox from 'js/_components/atoms/_btcheckbox';

afterEach(cleanup)


describe("BTCheckbox Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow(<BTCheckbox />);
        expect(wrapper).toMatchSnapshot();
      });


});
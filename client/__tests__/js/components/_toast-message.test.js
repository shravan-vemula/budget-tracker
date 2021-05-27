import React from 'react';
import {cleanup} from '@testing-library/react';
import ToastMessage from 'js/_components/atoms/_toast-message';

afterEach(cleanup)


describe("BTCheckbox Component",()=>{
 
    it("renders correctly", () => {
        const wrapper = shallow(<ToastMessage />);
        expect(wrapper).toMatchSnapshot();
      });


});
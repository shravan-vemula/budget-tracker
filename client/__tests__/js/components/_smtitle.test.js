import React from 'react';
import {render,cleanup} from '@testing-library/react';
import Smtitle from 'js/_components/atoms/_smtitle';

afterEach(cleanup)

describe("Smtitle Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<Smtitle />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
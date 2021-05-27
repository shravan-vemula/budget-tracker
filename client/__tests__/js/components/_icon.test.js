import React from 'react';
import {render,cleanup} from '@testing-library/react';
import Icon from 'js/_components/atoms/_icon';

afterEach(cleanup)

describe("FeedCard Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
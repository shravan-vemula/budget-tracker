import React from 'react';
import {render,cleanup} from '@testing-library/react';
import FeedCard from 'js/_components/molecules/_feedcard';

afterEach(cleanup)

describe("FeedCard Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<FeedCard />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
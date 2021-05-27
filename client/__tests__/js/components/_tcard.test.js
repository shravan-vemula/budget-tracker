import React from 'react';
import {render,cleanup} from '@testing-library/react';
import TCard from 'js/_components/molecules/_tcard';

afterEach(cleanup)

describe("TCard Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<TCard />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
import React from 'react';
import {render,cleanup} from '@testing-library/react';
import TopCard from 'js/_components/molecules/_topcard';

afterEach(cleanup)

describe("TopCard Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<TopCard />);
        expect(wrapper).toMatchSnapshot();
      });

   
});
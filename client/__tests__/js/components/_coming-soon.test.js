import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ComingSoon from 'js/_components/molecules/_coming-soon';
import {render,cleanup} from '@testing-library/react';

afterEach(cleanup);

describe("Temporary Component",() =>{
    it("renders correctly", () => {
        const wrapper = shallow(<ComingSoon />);
        expect(wrapper).toMatchSnapshot();
      });
    it("should have heading", () =>{
        const { getByText } =render(<BrowserRouter><ComingSoon /></BrowserRouter>);
        expect(getByText("COMING SOON")).toBe;

    });

});


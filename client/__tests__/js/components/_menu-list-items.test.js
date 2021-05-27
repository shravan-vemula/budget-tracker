import React from 'react';
import {render, fireEvent, cleanup, getByRole} from '@testing-library/react';
import MenuItemsList from 'js/_components/molecules/_menu-list-items';
import{ BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

describe("LeftNavBar Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<MenuItemsList />);
        expect(wrapper).toMatchSnapshot();
      });
    it("should have all the icons", ()=>{
        const{ getAllByRole } = render(<BrowserRouter><MenuItemsList /></BrowserRouter>);
        expect(getAllByRole("img")).toBe;
    });
    const handleLinkChange =  jest.fn();
    it("should change active link when clicked on overview icon", ()=>{
        const{ getByTestId } = render(<BrowserRouter><MenuItemsList /></BrowserRouter>);
        fireEvent.click(getByTestId("overview"));
        expect(handleLinkChange).toBeCalled;
    });
    it("should change active link when clicked on income icon", ()=>{
        const{ getByTestId } = render(<BrowserRouter><MenuItemsList /></BrowserRouter>);
        fireEvent.click(getByTestId("income"));
        expect(handleLinkChange).toBeCalled;
    });
    it("should change active link when clicked on expenses icon", ()=>{
        const{ getByTestId } = render(<BrowserRouter><MenuItemsList /></BrowserRouter>);
        fireEvent.click(getByTestId("expenses"));
        expect(handleLinkChange).toBeCalled;
    });
    it("should change active link when clicked on budget icon", ()=>{
        const{ getByTestId } = render(<BrowserRouter><MenuItemsList /></BrowserRouter>);
        fireEvent.click(getByTestId("budget"));
        expect(handleLinkChange).toBeCalled;
    });
    // it("should change active link when clicked on bank icon", ()=>{
    //     const{ getByTestId } = render(<BrowserRouter><ListMenuItems /></BrowserRouter>);
    //     fireEvent.click(getByTestId("bank"));
    //     expect(handleLinkChange).toBeCalled;
    // });
});
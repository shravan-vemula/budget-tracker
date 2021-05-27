import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import AddTransaction from 'js/_components/organisms/_addtransaction';



global.fetch = jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({ }),
})
);
beforeEach(() => {
  fetch.mockClear();
  
}); 

afterEach(cleanup)

describe("AddTransaction Component", () => {
    const categories = [
        {
            "id": 1,
            "name": "Vacation"
        },
        {
            "id": 2,
            "name": "Food"
        }];
    const add = "None";
    const myAddClick = jest.fn();
    const myUpdate = jest.fn();
    it("renders correctly", () => {

        const wrapper = shallow(<AddTransaction display={add} addClick={myAddClick} categories={categories} update={myUpdate} />);
        expect(wrapper).toMatchSnapshot();
    });



    // it("on click save button should save", () => {

    //     const { getByTestId } = render(<AddTransaction display={add} addClick={myAddClick} categories={categories} update={myUpdate} />);
    //     fireEvent.keyUp(getByTestId("amount"), {
    //         target: { value: "123" }
    //     });
    //     fireEvent.click(getByTestId("saveButton"));
    //     expect(myAddClick).toBeCalled;
    //     expect(myUpdate).toBeCalled;

    // });

    it("on click close diolag button tab is closed", () => {

        const { getByTestId } = render(<AddTransaction display={add} addClick={myAddClick} categories={categories} update={myUpdate} />);
        fireEvent.click(getByTestId("closeDialog"));
        expect(myAddClick).toBeCalled;
    });

    it("amount input field validations are implemented", () => {

        const { getByTestId } = render(<AddTransaction display={add} addClick={myAddClick} categories={categories} update={myUpdate} />);
        fireEvent.keyUp(getByTestId("amount"), {
            target: { value: "123x" }
        });
        const input = getByTestId("amount");
        expect(input.value).toBe("123");

    });

    // it("form validations are implemented", () => {

    //     const { getByTestId } = render(<AddTransaction display={add} addClick={myAddClick} categories={categories} update={myUpdate} />);
    //     const transType = getByTestId("type");
    //     // console.log(transType);
    //     transType.value="Income";
    //     fireEvent.change(transType);
       
    //     expect(transType.value).toBe("Income");

    //     const category = getByTestId("category");
    //     category.value="Food";
    //     fireEvent.change(category);
    //     expect(category.value).toBe("Food");

    //     const period = getByTestId("period");
    //     period.value="DAILY";
    //     fireEvent.change(period);
    //     expect(period.value).toBe("DAILY");



    // });



});
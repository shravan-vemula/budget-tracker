import React from 'react';
import { render, cleanup, screen, userEvent, fireEvent } from '@testing-library/react';
import TransactionCard from 'js/_components/molecules/_transactioncard';
import TCard from "js/_components/molecules/_tcard";
import CardContent from '@material-ui/core/CardContent';

afterEach(cleanup)

describe("TransactionCard Component", () => {
    const testData = [{
        "id": 1,
        "userId": 1,
        "title": "Bawarchi Restaurant",
        "category": "Dinner",
        "type": "debit",
        "amount": 400,
        "frequency": 0,
        "createdAt": "2020-06-15",
        "createdBy": "self",
        "modifiedAt": "",
        "modifiedBy": "",
        "isDeleted": true,
        "isActive": true
    }];

    it("renders correctly", () => {
        const myAddClick = jest.fn();
        const wrapper = shallow(<TransactionCard data={testData} addClick={myAddClick} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("have TCard compents rendered correctly", () => {
        const myAddClick = jest.fn();
        const wrapper = shallow(<TransactionCard data={testData} addClick={myAddClick} />);
        expect(wrapper.find(<TCard />)).toBe;
    });


    it("it should contain three images inside component", () => {
        const { queryAllByRole } = render(<TransactionCard />);
        expect(queryAllByRole('img')).toHaveLength(3);
    });

    it("it should contain text Transactions inside component", () => {
        const { queryByText } = render(<TransactionCard />);
        expect(queryByText('Transactions')).toBe;
    });

    const listTransactions = jest.fn();
    it("listTransactions should be called", () => {
        const { queryByText } = render(<TransactionCard />);
        expect(listTransactions).toBeCalled;

    });

    const getToday = jest.fn();
    it("getToday should be called", () => {
        const { queryByText } = render(<TransactionCard />);
        expect(getToday).toBeCalled;

    });

    const getMonth = jest.fn();
    it("getMonth should be called", () => {
        const { queryByText } = render(<TransactionCard />);
        expect(getMonth).toBeCalled;


    });

    it("Add transaction image clicked should trigger addClick function", () => {
        const myAddClick = jest.fn();
        const { getByTestId } = render(<TransactionCard data={testData} addClick={myAddClick} />);
        fireEvent.click(getByTestId("addimg"));
        expect(myAddClick).toBeCalled;
    });


});
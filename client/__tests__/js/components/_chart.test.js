import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Chart from 'js/_components/molecules/_chart';

afterEach(cleanup)

describe("Chart Component renders correctly", () => {
    it("renders correctly", () => {
        const data = [
            {
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
        const budgetData = [

            {
                "id": 1,
                "userId": 1,
                "createdAt": "2020-06-26T17:50:39.848+00:00",
                "modifiedAt": null,
                "createdBy": 1,
                "modifiedBy": 0,
                "startDate": "2020-06-18T05:46:42.086+00:00",
                "endDate": "2020-07-18T05:46:42.086+00:00",
                "frequency": "HALFYEARLY",
                "budgetComponents": [
                    {
                        "id": 1,
                        "budgetId": 1,
                        "category": "Vacation",
                        "currency": 20000,
                        "currencyFormat": "US",
                        "createdAt": "2020-06-26T17:55:55.272+00:00",
                        "modifiedAt": null,
                        "modifiedBy": 0,
                        "createdBy": 1,
                        "frequency": "MONTHLY",
                        "deleted": false,
                        "active": true
                    }]
                }];
        const wrapper = shallow(<Chart left="126px" top="294px" expData={data} budgetData={budgetData} />);
        expect(wrapper).toMatchSnapshot();
    });


});
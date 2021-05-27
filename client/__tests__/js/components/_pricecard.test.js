import React from 'react';
import {render,cleanup} from '@testing-library/react';
import PriceCard from 'js/_components/molecules/_pricecard';
import Amount from "js/_components/atoms/_amount";
import Icon from "js/_components/atoms/_icon";
import Smtitle from "js/_components/atoms/_smtitle";
import Pertext from "js/_components/atoms/_pertext";

afterEach(cleanup)

describe("PriceCard Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<PriceCard left="122px" top="92px" title="Income" amount="200" statustext="For July" pertext="32"/>);
        expect(wrapper).toMatchSnapshot();
      });

      it("it should contain Amount child component", () => {
        const wrapper = shallow(<PriceCard left="122px" top="92px" title="Income" amount="200" statustext="For July" pertext="32"/>);
        expect(wrapper.find(Amount)).toHaveLength(1);
      });

      it("it should contain Icon child component", () => {
        const wrapper = shallow(<PriceCard left="122px" top="92px" title="Income" amount="200" statustext="For July" pertext="32"/>);
        expect(wrapper.find(Icon)).toHaveLength(1);
      });
      it("it should contain Smtitle child component", () => {
        const wrapper = shallow(<PriceCard left="122px" top="92px" title="Income" amount="200" statustext="For July" pertext="32"/>);
        expect(wrapper.find(Smtitle)).toHaveLength(1);
      });
      it("it should contain Pertext child component", () => {
        const wrapper = shallow(<PriceCard left="122px" top="92px" title="Income" amount="200" statustext="For July" pertext="32"/>);
        expect(wrapper.find(Pertext)).toHaveLength(1);
      });


   
});
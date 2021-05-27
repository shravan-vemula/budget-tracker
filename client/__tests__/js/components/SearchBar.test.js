import React from 'react';

import {BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import SearchBar from 'js/_components/atoms/SearchBar';
import {shallow} from 'enzyme';


describe('SearchBar renders correctly', () =>{

    it("SearchBar snap shot", () => {
        const wrapper = shallow(<Router><SearchBar /> </Router>);
        expect(wrapper).toMatchSnapshot();
      });

    
});
import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'

describe('Home Component', () => {
    it(' runQuery should render error message if state.errorStatus is defined', ()=> {
        const wrapper = shallow(<Home />);
        wrapper.setState({errorStatus: "No results from search", results:null});
        expect(wrapper.find('.books-container').text()).toBe("No results from search");
    });
});


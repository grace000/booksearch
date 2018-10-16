import React from 'react';
import Query from './Query';
import {shallow} from 'enzyme'

it('query component renders without crashing', () => {
  shallow(<Query />);
});

describe('Query Form', () => {
  it('should respond to input submission', () => {
      const queryComponent = shallow(<Query />);
      expect(queryComponent.find('.query-form').length).toBe(1);
      queryComponent.find('.query-form').simulate('submit', {target: {name: 'search', value: 'Jazz History'}});
  });

  it('renders a search input', () => {
    expect(shallow(<Query />).find('.query-input').length).toEqual(1)
  })

  it('renders a search button', () => {
    expect(shallow(<Query />).find('.query-btn').length).toEqual(1)
  })

});

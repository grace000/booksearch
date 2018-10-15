import React from 'react';
import Query from './Query';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<Query />);
  });

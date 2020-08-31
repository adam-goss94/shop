import React from 'react';
import { shallow } from 'enzyme';
import { HoodiesComponent } from './Hoodies';

describe('Component Hoodies', () => {
  it('should render without crashing', () => {
    const component = shallow(<HoodiesComponent />);
    expect(component).toBeTruthy();
  });
});

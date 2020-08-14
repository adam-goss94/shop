import React from 'react';
import { shallow } from 'enzyme';
import { TshirtsComponent } from './Tshirts';

describe('Component Tshirts', () => {
  it('should render without crashing', () => {
    const component = shallow(<TshirtsComponent />);
    expect(component).toBeTruthy();
  });
});

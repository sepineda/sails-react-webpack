import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  const wrapper = shallow(<Navbar/>);
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

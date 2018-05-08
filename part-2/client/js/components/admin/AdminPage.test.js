import { shallow } from 'enzyme';
import React from 'react';
import AdminPage from './AdminPage';

describe('<Admin/>', () => {
  const wrapper = shallow(<AdminPage/>);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

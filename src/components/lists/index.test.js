import React from 'react';
import List from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders List component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<List/>)
  expect(contact.exists(".websiteList")).toBe(true)
});

import React from 'react';
import Table from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders Table component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<Table/>)
  expect(contact.exists(".results")).toBe(true)
});

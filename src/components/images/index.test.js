import React from 'react';
import W3Clogo from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders W3C image component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<W3Clogo/>)
  expect(contact.exists(".img-fluid")).toBe(true)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <W3Clogo/>
  );
  expect(wrapper).toMatchSnapshot();
});

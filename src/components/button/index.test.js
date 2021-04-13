import React from 'react';
import Contact from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders contact button', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<Contact/>)
  expect(contact.exists(".contactButton")).toBe(true)
});

it('should render contact button', () => {
  const wrapper = enzyme.mount(
      <Contact>Test</Contact>,
  );
  expect(wrapper).toMatchSnapshot();
});

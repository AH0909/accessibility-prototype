import React from 'react';
import { AccessibilityText } from './index.js';
import { IntroText } from './index.js';
import { SolutionText } from './index.js'
import { VideoText } from './index.js'
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders acccessibility text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<AccessibilityText />)
  expect(contact.exists(".accessibilityText")).toBe(true)
});

it('renders Introduction text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<IntroText />)
  expect(contact.exists(".introText")).toBe(true)
});

it('renders Solution text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<SolutionText />)
  expect(contact.exists(".solutionText")).toBe(true)
});

it('renders Video text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<VideoText />)
  expect(contact.exists(".videoText")).toBe(true)
});

import React from 'react';
import { AccessibilityText } from './index.js';
import { IntroText } from './index.js';
import { SolutionText } from './index.js'
import { VideoText } from './index.js'
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders acccessibility text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const acccessibilityText = enzyme.shallow(<AccessibilityText/>)
  expect(acccessibilityText.exists(".accessibilityText")).toBe(true)
  expect(acccessibilityText.text()).toEqual('What is meant by accessibility?Accessibility in software engineering refers to making a site as useable as possible, by as many people as possible (MDN, 2020).')
});

it('renders Introduction text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const introText = enzyme.shallow(<IntroText/>)
  expect(introText.exists(".introText")).toBe(true)
  expect(introText.text()).toEqual(`Improving accessibility in Sky Betting and Gaming's Internal ServicesAs a graduate in the Tech Academy, I am completing my Final Year Project on Accessibility.The research question I will be answering is: How can accessibility in Sky Betting and Gaming’s internal Admin services be improved?To answer this question, I asked users of Gaming Admin to give a rating on a range accessibility features.A rating of 10 meant they wanted this solution and thought it would add great value.A rating of 1 meant they did not want this solution and thought it would add no value.`)
});

it('renders Solution text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const solutionText = enzyme.shallow(<SolutionText/>)
  expect(solutionText.exists(".solutionText")).toBe(true)
  expect(solutionText.text()).toEqual(`Prioritised solutionsAfter analysising the results by taking the 'range of ratings' and the 'average rating' into consideration, I prioritised the accessibility features. In the time period between the questionnaire and focus group, I implemented as many solutions as possible, starting with the ability to navigate with a keyboard '1'. The focus group [was then able to give me feedback in order to further refine the accessibility features implemented]This prototype will then be used to create a report feeding back the answer to my research question to my team, Gaming Admin.`)
});

it('renders Video text', () => {
  enzyme.configure({ adapter: new Adapter() })
  const videoText = enzyme.shallow(<VideoText/>)
  expect(videoText.exists(".videoText")).toBe(true)
  expect(videoText.text()).toEqual(`W3C, known as the World Wide Web Consortium, is an international standards organisation for the Web.W3C have produced a set of standards for accessibility named Web Content Accessibility Guidelines (WCAG).The most recent set of guidelines are WCAG 2.1 published in June 2018.   As part of my project I have looked closely at navigation and colour.For navigation, "Success Criterion 3.2.3 Consistent Navigation" is relevant. For colour, "Understanding Success Criterion 1.4.3: Contrast (Minimum)" is relevant.`)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <AccessibilityText/>,
    <IntroText/>,
    <SolutionText/>,
    <VideoText/>
  );
  expect(wrapper).toMatchSnapshot();
});

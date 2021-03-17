import React from 'react';
import List from "./components/lists"

import { AccessibilityText } from "./components/text/index.js"
import ContentWithColourPicker from "./components/Content/index.js"
import Tab from "./components/tab"
import Tabs from "./components/tabs"
import W3Clogo from "./components/images/index.js"
import YoutubeEmbed from "./components/youtube";

import "../src/styles/App.css";
import "../src/styles/Table.css";
import '../src/styles/video.css';

const App = () => (
  <Tabs>
    <Tab title="Project">
      <div></div>
      < ContentWithColourPicker />
    </Tab>
    {/* Second tab */}
    <Tab title="Reading">
      < AccessibilityText />
      <List />
    </Tab>
    {/* Final tab */}
    <Tab title="Standards">
      <h2>Introduction to Web Accessibility and W3C Standards</h2>
      <W3Clogo />
      <p>W3C, known as the World Wide Web Consortium, is an international standards organisation for the Web.<br/>
        W3C have prodcuced a set of standards for accessibility named Web Content Accessibility Guidelines (WCAG).<br/>
        The most recent set of guidelines are WCAG 2.1 published in June 2018.   </p>

        <p>As part of my project I have looked closely at navigation and colour.<br/>
        For navigation, "Success Criterion 3.2.3 Consistent Navigation" is relevant. <br/>
        For colour, "Understanding Success Criterion 1.4.3: Contrast (Minimum)" is relevant.</p>
      <div className="App">
        <YoutubeEmbed embedId="20SHvU2PKsM" />
        <p>Introduction to Web Accessibility and W3C Standards.</p>
      </div>
    </Tab>
  </Tabs>
)

export default App


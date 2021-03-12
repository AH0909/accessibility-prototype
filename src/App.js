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
      <p>Add image summary</p>
      <div className="App">
        <YoutubeEmbed embedId="20SHvU2PKsM" />
        <p>Add video summary</p>
      </div>
    </Tab>
  </Tabs>
)

export default App


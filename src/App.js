import React from 'react';
import List from "./components/lists"

import { AccessibilityText } from "./components/text/index.js"
import ContentWithColourPicker from "./components/Content/index.js"
import Tab from "./components/tab"
import Tabs from "./components/tabs"
import W3Clogo from "./components/images/index.js"
import { VideoText } from "./components/text"
import YoutubeEmbed from "./components/youtube";

import "../src/styles/App.css";
import "../src/styles/Table.css";
import '../src/styles/video.css';

const App = () => (
  <Tabs>
    <Tab title="Project">
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
      < VideoText />
        <YoutubeEmbed aria-label= "video" embedId="20SHvU2PKsM" />
        <p>Introduction to Web Accessibility and W3C Standards.</p>
    </Tab>
  </Tabs>
)

export default App


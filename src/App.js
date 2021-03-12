import React from 'react';
import Table from "./components/table"
import List from "./components/lists"
import ContentWithColourPicker from "./components/Content/index.js"

import Tabs from "./components/tabs"
import Tab from "./components/tab"

import YoutubeEmbed from "./components/youtube";


import "../src/styles/App.css";
import "../src/styles/Table.css";

// const tableWithColourPicker = WithColourPicker(Table)

const App = () => (
    <Tabs>
      <Tab title="Project">
        <div></div>
        < ContentWithColourPicker />
      </Tab>
      {/* Second tab */}
      <Tab title="Reading">
        <h2>Accessibility...who? what? why?</h2>
        <h3>What is meant by accessibility?</h3>
        <p>Description here....</p>
        <List />
      </Tab>
      {/* Final tab */}
      <Tab title="Standards">
        <h2>Introduction to Web Accessibility and W3C Standards</h2>
        <div className="App">
      <p>Add video summary</p>
      <YoutubeEmbed embedId="20SHvU2PKsM" />
    </div>
      </Tab>
    </Tabs>
  )

  export default App
  

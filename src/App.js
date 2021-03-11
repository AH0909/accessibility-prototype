import React from 'react';
import Table from "./components/table"
import List from "./components/lists"
import WithColourPicker from "./components/colourPicker"
import IntroText from "./components/text/index.js"
import { SolutionText } from "./components/text/index.js"
import ContentWithColourPicker from "./components/Content/index.js"

import Tabs from "./components/tabs"
import Tab from "./components/tab"


import "../src/styles/App.css";
import "../src/styles/Table.css";

// const tableWithColourPicker = WithColourPicker(Table)

const App = () => (
    <Tabs>
      <Tab title="Welcome">
        <div></div>

        < ContentWithColourPicker />
        {/* <WithColourPicker /> */}
        {/* <IntroText /> */}
        {/* {WithColourPicker(Table)} */}
        {/* <SolutionText /> */}
      </Tab>
      {/* Second tab */}
      <Tab title="Reading">
        <h2>Accessibility...who? what? why?</h2>
        <h3>What is meant by accessibility?</h3>
        <p>Description here....</p>
        <List />
      </Tab>
      {/* Final tab */}
      <Tab title="Summary">
        <h2>Video</h2>
        <p>Here is a quick summary of my project</p>
        <p> Insert video here</p>
        <h2>Thank you</h2>
        <p>Any questions please get in touch.</p>
      </Tab>
    </Tabs>
  )

  export default App
  

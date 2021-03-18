// import React from 'react';
import React, { useState } from "react";
import List from "./components/lists"

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles.js";
import { lightTheme, darkTheme } from "./components/darkMode//themes.js";

import { AccessibilityText } from "./components/text/index.js"
import ContentWithColourPicker from "./components/Content/index.js"
import Tab from "./components/tab"
import Tabs from "./components/tabs"
import W3Clogo from "./components/images/index.js"
import { VideoText } from "./components/text"
import YoutubeEmbed from "./components/youtube";
import Contact from "./components/button";
import Toggle from "./components/toggle";

import "../src/styles/app.css";
import "../src/styles/table.css";
import '../src/styles/video.css';
import "../src/styles/toggle.css";

// const App = () => (
//   <Tabs>
//     <Tab title="Project">
//       < ContentWithColourPicker />
//     </Tab>
//     {/* Second tab */}
//     <Tab title="Reading">
//     <Toggle />
//       < AccessibilityText />
//       <List />
//     </Tab>
//     {/* Final tab */}
//     <Tab title="Standards">
//       <h2>Introduction to Web Accessibility and W3C Standards</h2>
//       <W3Clogo />
//       < VideoText />
//       <Contact />
//       <YoutubeEmbed aria-label="video" embedId="20SHvU2PKsM" />
//       <p>Introduction to Web Accessibility and W3C Standards.</p>
//     </Tab>
//   </Tabs>
// )

// export default App

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          <Tabs>
    <Tab title="Project">
      < ContentWithColourPicker />
    </Tab>
    {/* Second tab */}
    <Tab title="Reading">
    <Toggle />
      < AccessibilityText />
      <List />
    </Tab>
    {/* Final tab */}
    <Tab title="Standards">
      <h2>Introduction to Web Accessibility and W3C Standards</h2>
      <W3Clogo />
      < VideoText />
      <Contact />
      <YoutubeEmbed aria-label="video" embedId="20SHvU2PKsM" />
      <p> A Youtube Video to show you an Introduction to Web Accessibility and W3C Standards.</p>
    </Tab>
  </Tabs>
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default App;
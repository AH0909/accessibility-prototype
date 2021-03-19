
import React from "react";
import List from "./components/lists"
import { ThemeProvider } from "styled-components";

import { AccessibilityText } from "./components/text/index.js"
import { GlobalStyles } from "./components/darkMode/globalStyles.js";
import { lightTheme, darkTheme } from "./components/darkMode/themes.js";
import { useDarkMode } from "./components/darkMode/useDarkMode.js"

import Toggle from "./components/darkMode/toggler.js"
import ContentWithColourPicker from "./components/content/index.js"
import Tab from "./components/tab"
import Tabs from "./components/tabs"
import W3Clogo from "./components/images/index.js"
import { VideoText } from "./components/text"
import YoutubeEmbed from "./components/youtube";
import Contact from "./components/button";


import "../src/styles/app.css";
import "../src/styles/table.css";
import '../src/styles/video.css';

const App = () => {
  const [theme, themeToggler ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
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
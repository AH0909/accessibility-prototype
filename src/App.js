import React from 'react';
import Table from "./components/table"
import List from "./components/lists"
import ColourPicker from "./components/colourPicker"

import Tabs from "./components/tabs"
import Tab from "./components/tab"


import "../src/styles/App.css";
import "../src/styles/Table.css";

const App = () => (
    <Tabs>
      <Tab title="Welcome">
        <div></div>
        <ColourPicker />
        <h1>My Accessibility Research Project</h1>
        <h2>Improving accessibility in Sky Betting and Gaming's Internal Services</h2>
        <p>As a graduate in the Tech Academy, I am completing my Final Year Project on Accessibility.<br/>
        The research question I will be answering is:<br/>
        <br/>
        <strong> How can accessibility in Sky Betting and Gaming’s internal Admin services be improved?</strong><br/>
        <br/>
        To answer this question, I asked users of Gaming Admin to give a rating on a range accessibility features.<br/>
        A rating of 10 meant they wanted this solution and thought it would add great value.<br/>
        A rating of 1 meant they did not want this solution and thought it would add no value.<br/>
        <br/>
        Here is are the results:  </p>
        <Table />
        <h2>Prioritised solutions</h2>
        <p>After analysising the results by taking the 'range of ratings' and the 'average rating' into consideration, I prioritised the accessibility features. <br/>
          In the time period between the questionnaire and focus group, I implemented as many solutions as possible, starting with the ability to navigate with a keyboard '1'. <br/>
          The focus group [was then able to give me feedback in order to further refine the accessibility features implemented]<br/>
          This prototype will then be used to create a report feeding back the answer to my research question to my team, Gaming Admin.
        </p>
        
      </Tab>
      <Tab title="Reading">
        <h2>Accessibility...who? what? why?</h2>
        <h3>What is meant by accessibility?</h3>
        <p>Description here....</p>
        <List />
      </Tab>
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
  

import React from 'react';
import ReactDOM from 'react-dom';
import Table from "./components/table"
import List from "./components/list"


import "../src/styles/app.css";
import "../src/styles/table.css";

const Tab = ({children, index, isSelected}) => (
    <div id={`tabpanel_${index}`}
         name={`tabpanel_${index}`}
         role="tabpanel" 
         aria-labelledby={`tab_${index}`}
         aria-hidden={!isSelected()}
    >{children}</div>
  )
  
  class Tabs extends React.Component {
    constructor(props) {
      super(props)
      this.tabs = props.children
      this.state = {selected: this.tabs.find(tab => tab.props.selected) || this.tabs[0]}
      this.selectTab = this.selectTab.bind(this)
      this.previousTab = this.previousTab.bind(this)
      this.nextTab = this.nextTab.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleKeyup = this.handleKeyup.bind(this)
    }
    componentDidUpdate() {
      this.activeLink.focus()
    }
    selectTab (tab) {
      this.setState({selected: tab})
    }
    previousTab (tab) {
      const index = this.tabs.indexOf(tab)
      if (index > 0) this.selectTab(this.tabs[index - 1])
    }
    nextTab (tab) {
      const index = this.tabs.indexOf(tab)
      if (index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1])
    }
    handleClick (e, tab) {
      e.preventDefault()
      this.selectTab(tab)
    }
    handleKeyup (e, tab) {
      e.preventDefault()
      if (e.which === 13) this.selectTab(tab)
      else if (e.which === 37) this.previousTab(tab)
      else if (e.which === 39) this.nextTab(tab)
    }
    render () {
      return (<div>
        <ul role="tablist">
          {this.tabs.map((tab, i) => (
            <li role="presentation">
              <a id={`tab_${i}`}
                 href={`#tabpanel_${i}`}
                 role="tab"
                 aria-controls={`tab_${i}`}
                 aria-selected={tab === this.state.selected}
                 tabIndex={tab === this.state.selected ? 0 : -1}
                 onClick={e => this.handleClick(e, tab)}
                 onKeyUp={e => this.handleKeyup(e, tab)}
                 ref={link => { if (tab === this.state.selected) this.activeLink = link}}
              >{tab.props.title}</a>
            </li>
          ))}
        </ul>
        <div>
          {this.tabs.map((tab, i) => (
            React.cloneElement(tab, {
              index: i,
              isSelected: () => tab === this.state.selected
            })
          ))}
        </div>
      </div>)
    }
  }
  
  const App = () => (
    <Tabs>
      <Tab title="Welcome">
        <h1>My Accessibility Research Project</h1>
        <h2>Improving accessibility in Sky Betting and Gaming's Internal Services</h2>
        <p>As a graduate in the Tech Academy, I am completing my Final Year Project on Accessibility.<br/>
        The research question I will be answering is:<br/>
        <br/>
        <strong> How can accessibility in Sky Betting and Gaming’s internal Admin services be improved?</strong><br/>
        <br/>
        To do this, I asked users of Gaming Admin to give a rating on a range accessibility features.<br/>
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
        <h2>Approachable</h2>
        <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
        <List />
      </Tab>
      <Tab title="Summary">
        <h2>Vide</h2>
        <p>Only 7.8 kB gzipped, no dependencies<br/>
          Small API, small learning curve</p>

      </Tab>
    </Tabs>
  )
  
ReactDOM.render(<App/>, document.getElementById('mount'))

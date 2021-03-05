import React, { Component } from 'react';
import Tabs from "./components/Tabs";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }


// set state of display bio to opposite value
    toggleDisplayBio() {
        this.setState({ displayBio :!this.state.displayBio })
    }

    render() {
        return (
            <div>
                     <Tabs> 
       <div label="Home"> 
         <h1>Prototyping Accessibility Features</h1>
                <p>Navigate this site to explore accessibility solutions for Gaming Admin.</p>
                <p>This project is part of my MSc in Digital and Technology Solutions with Sheffield Hallam University,</p>
                <p>For further information regarding this project click, 'More information'.</p>

                {
                    this.state.displayBio ? (
                        <div>
                        <p>Research question:</p>
                        <p>Objectives:</p>
                        <p>Sheffield Hallam contact information:</p>
                        <p>Slack: Amy.Haley</p>
                        <p>Email: amy.haley@skybettingandgaming.com</p>
                        <button onClick ={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick ={this.toggleDisplayBio}>More information</button>
                        </div>
                    )
                }

                <p>Accessibility solutions showcased were selected using a questionnaire all Gaming Admin users were invited to complete.</p>
                <p>The table below shows the results from the questionnaire.</p>
                <p>Highlighted rows show that this solution is implemeted within this prototype.</p>
       </div> 
       <div label="View a list"> 
         Add a  <em>list</em>! 
       </div> 
       <div label="View assets"> 
         Add <em>assets</em>! 
       </div> 
     </Tabs> 
 
            </div>
        )
    }
}

export default App;
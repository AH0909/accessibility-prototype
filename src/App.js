import React, { Component } from 'react';
import Tabs from "./components/Tabs";
import "./App.css";
import "./Table.css";

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
                <p>Highlighted rows show that this solution is implemented within this prototype.</p>
                <table>
                    <tr>
                        <th>Accessibility feature</th>
                        <th>Range of ratings</th>
                        <th>Average rating</th>
                        <th>Priority</th>
                    </tr>
                    <tr>
                        <td>Video captions</td>
                        <td>1-10</td>
                        <td>4.08</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Video script</td>
                        <td>1-7</td>
                        <td>4.31</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Screen magnification</td>
                        <td>1-10</td>
                        <td>6.08</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Screen reader</td>
                        <td>3-10</td>
                        <td>6.08</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>High contrasting Colour Toggle</td>
                        <td>4-10</td>
                        <td>7.46</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Ability to navigate with a keyboard</td>
                        <td>5-10</td>
                        <td>8.62</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Read only summary page</td>
                        <td>1-10</td>
                        <td>6.31</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Digital voice recorder</td>
                        <td>1-10</td>
                        <td>5.46</td>
                        <td>6</td>
                    </tr>
                    </table>
       </div> 
       <div label="List"> 
         Add a  <em>list</em>! 
         <h1>Accessibility Reading</h1>
            <p>Key websites to aid in accessibility</p>
                        
       </div> 
       <div label="Media"> 
         Add <em>assets</em>! 
       </div> 
     </Tabs> 
 
            </div>
        )
    }
}

export default App;

//tab help from https://www.digitalocean.com/community/tutorials/react-tabs-component
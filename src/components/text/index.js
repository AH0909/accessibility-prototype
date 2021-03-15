import React, { Component } from 'react';

class IntroText extends Component {
    render() {
        return (
            <div>
                <h2>Improving accessibility in Sky Betting and Gaming's Internal Services</h2>
                <p>As a graduate in the Tech Academy, I am completing my Final Year Project on Accessibility.<br />
                The research question I will be answering is:<br />
                <br />
                <h2> How can accessibility in Sky Betting and Gaming’s internal Admin services be improved?</h2>
                To answer this question, I asked users of Gaming Admin to give a rating on a range accessibility features.<br />
                A rating of 10 meant they wanted this solution and thought it would add great value.<br />
                A rating of 1 meant they did not want this solution and thought it would add no value.<br />
                </p>
            </div>
        )
    }
}

export class SolutionText extends Component {
    render() {
        return (
            <div>
                <h2>Prioritised solutions</h2>
                <p>After analysising the results by taking the 'range of ratings' and the 'average rating' into consideration, I prioritised the accessibility features. <br />
          In the time period between the questionnaire and focus group, I implemented as many solutions as possible, starting with the ability to navigate with a keyboard '1'. <br />
          The focus group [was then able to give me feedback in order to further refine the accessibility features implemented]<br />
          This prototype will then be used to create a report feeding back the answer to my research question to my team, Gaming Admin.
        </p>
            </div>
        )
    }
}

export class AccessibilityText extends Component {
    render() {
        return (
            <div>
                <h2>What is meant by accessibility?</h2>
                <p>Accessibility in software engineering refers to making a site as useable as possible, by as many people as possible (MDN, 2020). </p>
            </div>
        )
    }
}

export default IntroText; 

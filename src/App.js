import React, { Component } from 'react';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const ComponentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('ComponentClassInstance', ComponentClassInstance)





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
                <h1>Accessibility features</h1>
                <p>Navigate this site to explore accessibility solutions for Gaming Admin</p>
                <p>This is part of Amy Haley's final year project with Sheffield Hallam University</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>Slack: Amy.Haley</p>
                        <p>Email: amy.haley@skybettingandgaming.com</p>
                        <p>Thank you</p>
                        <button onClick ={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick ={this.toggleDisplayBio}>Contact information</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;
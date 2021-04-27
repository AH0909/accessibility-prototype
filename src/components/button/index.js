import React from 'react';

// show more or show less button
const Button = (props) => {
    return (
        <button
            onClick={props.toggle}
        >
            {props.name}
        </button>
    )
}

// renders button with open and closed states
class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    
// states show different button description and content whether it is open or not
    render() {
        return (
            <div className="button-container">
                <Button className="contactButton"
                    name={this.state.isOpen ? "Hide contact information" : "Show contact information"}
                    toggle={this.toggle}
                />

                {this.state.isOpen &&
                    <div class="card-panel pink darken-2">
                        <span class="white-text">
                            <p>
                                If you have any questions please Slack me<br />
                                Amy Haley
                            </p>
                        </span>
                    </div>
                }

            </div>
        );
    }
}

export default Contact;

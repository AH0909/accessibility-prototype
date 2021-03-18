import React from 'react';

const Button = (props) => {
    return (
        <button
            className="btn pink darken-4"
            onClick={props.toggle}
        >
            {props.name}
        </button>
    )
}

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

    render() {
        return (
            <div class="button-container">
                <Button
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
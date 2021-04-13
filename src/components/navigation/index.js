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

// renders button with open and closed states
class NavInfo extends React.Component {
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
            <div className="button-container">
                <Button className="navButton"
                    name={this.state.isOpen ? "Hide Navigation Information" : "Navigation Information"}
                    toggle={this.toggle}
                />

                {this.state.isOpen &&
                    <div class="card-panel pink darken-2">
                        <span class="white-text">
                            <p>
                                Tab = navigate forwards <br/>
                                Tab+shift = navigate backwards <br/>
                                Enter = activates a link, button or toggle <br/>
                                Left and right arrows = navigate between tabs <br/>
                                Spacebar = play or pause a video <br/>
                            </p>
                        </span>
                    </div>
                }

            </div>
        );
    }
}

export default NavInfo;
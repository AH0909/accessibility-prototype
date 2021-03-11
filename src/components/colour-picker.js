import React from 'react';

class ColourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "pink"
    };
  }

  changeColour(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    const stylesObj = {
      background: this.state.colour
    };

    return (
      <div style={stylesObj} className="container">
        <div className="box">
          <h3>Choose your preferred background colour for this tab</h3>
          <p>
            <small>Name or #HEX value</small>
          </p>
          <input
            value={this.state.colour}
            onChange={this.changeColour.bind(this)}
          />
          <br />
        </div>
      </div>
    );
  }
}

export default ColourPicker;
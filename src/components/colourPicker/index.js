import React, { Component } from 'react';

class ColourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "indianred"
    };
  }

  changeColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    const stylesObj = {
      background: this.state.color
    };

    return (
      <div style={stylesObj} className="container">
        <div className="box">
          <h3>Choose your background colour</h3>
          <p>
            <small>Name or #HEX value</small>
          </p>
          <br />
          <input
            value={this.state.color}
            onChange={this.changeColor.bind(this)}
          />
          <br />
        </div>
      </div>
    );
  }
}

export default ColourPicker;

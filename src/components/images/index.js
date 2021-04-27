import React, { Component } from 'react';

// display the W3C logo
class W3Clogo extends Component {
    render() {
        return (
            <img className="img-fluid" 
            src={`${process.env.PUBLIC_URL}/assets/W3C.png`} 
            alt="W3C logo"/>
        )
    }
}

export default W3Clogo

import React, { Component } from 'react';

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
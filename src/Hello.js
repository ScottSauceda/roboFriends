import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return(
            <div className="f1 tc">
                <h1>Hello Texas!</h1>
                {/* <p>Welcome To React!</p> */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello
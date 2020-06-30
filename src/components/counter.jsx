import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
    };

    render() { 
        return (
            <div>
                <h1>This is a Django to React connection</h1>
                <br></br>
                <span>{this.formatCount()}</span>
                <button>Useless button for now</button>
            </div>
        );
    }

    formatCount() {
        return (
        <h2>is this working?</h2>
        );
    }
}
 
export default Counter;
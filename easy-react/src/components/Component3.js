import React, { Component } from 'react';


export class Component3 extends Component {
    render() {
        return (
            <div style={c3Style}>
                <h1>Toggle</h1>
                <p>Toggle handles enter and leave</p>
            </div>
        )
    }
}

const c3Style = {
    background: 'skyblue',
    color: 'white',
    padding: '1.5rem 1.5rem 5rem 1.5rem'
};

export default Component3

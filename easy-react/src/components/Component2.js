import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring from={{opacity: 0}} 
        to={{opacity: 1}}
        config={{delay:1000, duration:1000}}
        >
            {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1> Delayed fade-in</h1>
                            <p>
                                Loads 1 second after page loads and has 
                                a fade-in duration of 1 second. The toggle
                                button initiates click event for 3rd component</p>
                                <button style={btn} onClick=
                                {this.props.toggle}>

                                Toggle</button>
                        </div>

                    </div>
                )}
        </Spring>
        )
    }
}
const c2Style = {
    background: '#ff6700',
    color: 'white',
    padding: '1.5rem'
}

const btn ={
    background:'#333',
    color: '#fff',
    padding: '1rem 2rem',
    border:'none',
    textTransform:'uppercase',
    margin:'15px 0'
};

export default Component2
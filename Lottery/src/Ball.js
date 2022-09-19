import React, { Component } from 'react';
import "./Ball.css";

class Ball extends Component {
    render(){
        return(
            <div className='Ball'>
                <h2>
                {this.props.num}
                </h2>
                
            </div>
        )
    }

}

export default Ball;

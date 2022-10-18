import React, { Component } from 'react';
import './Chips.css';
class Chips extends Component {
    constructor(props){
        super(props);
        this.state={
            Number : 0
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        
        this.setState({
            Number: this.state.Number+1
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    ADD CHIPS
                </button>
            </div>
        )
    }
}

export default Chips;
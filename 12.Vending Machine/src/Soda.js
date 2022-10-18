import React, { Component } from 'react';

class Soda extends Component {
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
                    ADD SODA
                </button>
            </div>
        )
    }
}

export default Soda;
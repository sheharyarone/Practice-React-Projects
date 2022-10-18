import React, { Component } from 'react';

class Sardines extends Component {
    constructor(props){
        super(props);
        this.state={
            Number : 0
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {  
    
        this.setState({
            Number: this.state.Number+1
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    ADD SARDINE
                </button>
            </div>
        )
    }
}

export default Sardines;
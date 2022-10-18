import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to='/'>GO BACK</Link>

            </div>
        )
    }
}

export default Sardines;
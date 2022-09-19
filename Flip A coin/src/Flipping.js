import React, { Component } from 'react';

import Coin from './Coin';
import './Flipping.css';

class Flipping extends Component {
    static defaultProps = {
        choices : ['heads','tails']
    }
    constructor(props){
        super(props);
        this.state = {
            Display :false,
            choice : '',
            NoOfTails : 0, NoOfHeads : 0,
            NoOfFlips : 0
    }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        const res=this.props.choices[Math.floor(Math.random() * this.props.choices.length)];
        this.setState({
            Display : true,
            choice:res, 
            NoOfFlips : this.state.NoOfFlips+1,
            NoOfHeads : this.state.NoOfHeads+(res==='heads'? 1:0),
            NoOfTails : this.state.NoOfTails+(res==='tails'? 1:0)

        })
    } ;
    render(){
        return(
            <div className='Flipping'>
                <h2>LET'S FLIP A COIN ! </h2>

                {this.state.Display && <Coin choice={this.state.choice}/>}
                <button onClick={this.handleClick}>Press</button>
                <h4>Out of {this.state.NoOfFlips},
                 there have been {this.state.NoOfHeads} heads and {this.state.NoOfTails} tails. </h4>
            </div>
        )
    }
}
export default Flipping;
import React, { Component } from 'react';
import Die from './Die';
import "./RollDice.css";

class RollDice extends Component {
    static defaultProps = {sides : ['one','two','three','four','five','six']};
    constructor(props){
        super(props);
        this.state={face1: 'one',face2: 'one',isRolling : false};
        this.Roll=this.Roll.bind(this);
    }

    Roll () {
        const rand1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const rand2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        this.setState({face1 : rand1 ,face2: rand2,isRolling: true});
        // wait one second wait for button
        setTimeout(()=>{
            this.setState({isRolling:false})
        },1000)
    } 

    render(){
        return(
            <div className='RollDice'>
                <div className='RollDice-container'>
                <Die face={this.state.face1} rolling={this.state.isRolling}/>
                <Die face={this.state.face2} rolling={this.state.isRolling} />
                
            </div>
            <button  onClick={this.Roll} disabled={this.state.isRolling}> 
            {this.state.isRolling ? "Rolling..." : "Roll Dice"} </button>
            </div>
        )
    }

}

export default RollDice;
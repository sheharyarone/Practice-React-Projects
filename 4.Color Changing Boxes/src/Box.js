import React, { Component } from 'react';
import './Box.css';
import {choice} from './helpers'
class Box extends Component{
    constructor(props){
        super(props);
        this.state={buttonColor : choice(this.props.allColors)}
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
        let randColor;
        do{
            randColor = choice(this.props.allColors);
        }while(randColor===this.state.buttonColor)
        this.setState({buttonColor:randColor});
    }

    render(){
        return(
            <div className='Box' style ={{backgroundColor: this.state.buttonColor}} 
            onClick={this.handleClick}>
            </div>
        )
    }

}

export default Box;
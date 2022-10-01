import React, { Component } from 'react';

class Box extends Component {
    static defaultProps ={
        color:'purple',
        height:200,
        width:200
    }
    
    render(){
        const style= {
            backgroundColor: this.props.color,
            width:`${this.props.width}em`,
            height:`${this.props.height}em`
        }
        return(
            <div>
            <div style={style}>
            </div>
            <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }

}
export default Box;
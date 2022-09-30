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
            width:this.props.width,
            height:this.props.height
        }
        return(
            <div style={style}>
            </div>
        )
    }

}
export default Box;
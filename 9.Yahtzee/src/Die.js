import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    icons : ['one','two','three','four','five','six'],
    val:6
  }
  render() {
    const {icons,locked,val,handleClick,rolling}=this.props;
    let classes=`Die fas fa-dice-${icons[val-1]} fa-5x `;
    
    if (locked) classes+='Die-locked';
    if(rolling && !locked) classes+='Die-rolling';
    return (
      <i
        className={classes}
        onClick={()=>handleClick(this.props.idx)}
        disabled={true}
      />
      
    );
  }
}

export default Die;

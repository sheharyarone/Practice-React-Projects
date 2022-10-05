import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    icons : ['one','two','three','four','five','six']
  }
  render() {
    const {icons,locked,val,handleClick}=this.props;
    let classes=`Die fas fa-dice-${icons[val-1]} fa-5x `;
    
    if (locked) classes+='Die-locked';
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

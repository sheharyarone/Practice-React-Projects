import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const notDisabled = this.props.score===undefined; // TRUE WHEN NOT USED ONCE
    return (
      <tr className={`RuleRow RuleRow-${ notDisabled ? 'active' : 'disabled'}`} onClick={notDisabled ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{ !notDisabled? this.props.score:this.props.description }</td>
      </tr>
    )
  }
}

export default RuleRow;
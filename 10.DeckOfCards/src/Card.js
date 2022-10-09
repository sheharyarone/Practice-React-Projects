import React, { Component } from 'react';

class Card extends Component {
    render(){
        return(
            <div>
                <img src={`${this.props.src}`} />
            </div>
        )
    }

}
export default Card;
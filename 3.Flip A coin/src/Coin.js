import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render(){
        return(
            <div className='Coin'>
                <img src={`https://tinyurl.com/react-coin-${this.props.choice}-jpg`} />
            </div>
        )
    }

}
export default Coin;
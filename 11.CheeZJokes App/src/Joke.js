import React, { Component } from 'react';
import './Joke.css';
class Joke extends Component {

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={() => this.props.up(this.props.id)} />
                    <span className='Joke-votes'>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={() => this.props.down(this.props.id)} />
                </div>
                <div className='Joke-text'>{this.props.joke}</div>
            </div>
        )
    }

}
export default Joke;
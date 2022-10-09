import React, { Component } from 'react';

class Joke extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.joke} 
                </li>
                <div>
                <p>Votes : {this.props.votes}</p>
                <button onClick={() => this.props.up(this.props.id)}>UP</button>
                <button onClick={() => this.props.down(this.props.id)}>Down</button>
                </div>
            </div>
        )
    }

}
export default Joke;
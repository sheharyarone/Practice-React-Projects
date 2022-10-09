import React, { Component } from 'react';

class Joke extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.joke} Votes : {this.props.votes}
                </li>
                <button onClick={() => this.props.up(this.props.id)}>UP</button>
                <button onClick={() => this.props.down(this.props.id)}>Down</button>
            </div>
        )
    }

}
export default Joke;
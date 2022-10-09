import React, { Component } from 'react';

class Joke extends Component {
    
    render(){
        return(
            <div>
                <li>
                    {this.props.joke}
                </li>
            </div>
        )
    }

}
export default Joke;
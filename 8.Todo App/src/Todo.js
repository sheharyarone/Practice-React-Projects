import React, { Component } from 'react';

class Todo extends Component {

    render(){
        return(
            <div>
                <p>
                    {this.props.task}
                </p>
                <button onClick={this.props.remove}>X</button>
            </div>
        )
    }

}
export default Todo;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
class Soda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Number: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

        this.setState({
            Number: this.state.Number + 1
        });
    }
    render() {
        return (
            <div>
                <Message>
                    <button onClick={this.handleClick}>
                        ADD SODA
                    </button>
                    <Link to='/'>GO BACK</Link>
                </Message>
            </div>
        )
    }
}

export default Soda;
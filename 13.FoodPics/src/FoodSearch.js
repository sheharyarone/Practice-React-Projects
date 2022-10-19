import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            name: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>
                    SEARCH FOR FOOD
                </h1>

                <input
                    type='text'
                    placeholder='Type...'
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <Link to={`/food/${this.state.name}`} >GO!</Link >


            </div>
        )
    }
}
export default FoodSearch;
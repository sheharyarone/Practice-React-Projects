import React, { Component } from 'react';

class Food extends Component {
    render() {
        const name1=this.props.match.params.name;

        const url = `https://source.unsplash.com/1600x900/?${name1}`;
        return(
            <div>
                <h1>I LOVE TO EAT {name1}</h1>
                <img src={url} alt={name1} />
            </div>
        )
    }
}
export default Food;
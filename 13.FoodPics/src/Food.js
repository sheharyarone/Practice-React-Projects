import React, { Component } from 'react';
import {useParams } from 'react-router-dom';
class Food extends Component {
    render() {
        let params=useParams();
        const name1=this.params.name;

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
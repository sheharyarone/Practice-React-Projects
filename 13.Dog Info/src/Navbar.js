import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dogList from './DogList';
class Navbar extends Component {
    render() {
        
        const dogsName = dogList.map((dog) => {
            return <NavLink exact to={`/${dog.name}`} > {dog.name}</NavLink>

        });
        return (
            <div>
                {dogsName}
            </div>
        )
    }
}

export default Navbar;
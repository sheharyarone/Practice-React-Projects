import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dogList from './DogList';
import './Navbar.css';
class Navbar extends Component {
    render() {

        const dogsName = dogList.map((dog) =>
            <NavLink exact activeClassName='Navbar-active' to={`/${dog.name}`} > {dog.name}</NavLink>
        );
        return (
            <div className='Navbar'>
                <NavLink  activeClassName='Navbar-active' to='/'>HOME</NavLink>
                {dogsName}
            </div>
        )
    }
}

export default Navbar;
import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import dogList from './DogList';
import './Home.css';
class Home extends Component {
    render() {
        const dogsMini = dogList.map((dog) =>
            <div className='item'>
                <Link to={`/${dog.name}`}>
                <img src={require(`./${dog.src}.jpg`)} alt={dog.name} onClick={<Route to={`/${dog.name}`} />}/>
                </Link>
                <h3>{dog.name}</h3>
            </div>
        );

        return (
            <div>
                {dogsMini}
            </div>
        )
    }
}
export default Home;
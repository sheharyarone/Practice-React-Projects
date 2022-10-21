import React, { Component } from 'react';
import dogList from './DogList';
import './Home.css';
class Home extends Component {
    render() {
        const dogsMini = dogList.map((dog) =>
            <div className='item'>
                <img src={require(`./${dog.src}.jpg`)} alt={dog.name} />
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
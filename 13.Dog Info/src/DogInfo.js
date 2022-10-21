import React, { Component } from 'react'
import dogList from './DogList';
class DogInfo extends Component {
    render() {
        let name = this.props.match.params.name;
        const infoDog = dogList.map((dog) =>
            (name === dog.name) &&
            <div>
                <img src={require(`./${dog.src}.jpg`)} alt={name} />
                <h2>{this.props.name}</h2>
                <h3>age : {dog.age}</h3>
                {
                    dog.facts.map(fact =>
                        <li>
                            <i>{fact}</i>
                        </li>
                    )}
            </div>

        );
        return (
            <div>
                {infoDog}

            </div>
        )
    }
}
export default DogInfo;
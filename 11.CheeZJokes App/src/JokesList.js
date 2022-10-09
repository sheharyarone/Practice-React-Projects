import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
const API_URL = 'https://icanhazdadjoke.com/slack';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: []
        }
    }
    async componentDidMount() {

        for (let i = 0; i < 5; i++) {
            let response = await axios.get(API_URL);
            // console.log(response.data);
            let joke = response.data.attachments[0].text;
            this.setState(st => ({
                List: [
                    ...st.List,
                    joke
                ]
            })
            )
        }
    }

    render() {
        let Jokes = this.state.List.map(J => (
            <Joke joke={J} />
        ))
        return (
            <div>
                <h1>CHEEZJOKES APP</h1>
                <h3>{Jokes}</h3>
            </div>
        )
    }
}
export default JokesList;
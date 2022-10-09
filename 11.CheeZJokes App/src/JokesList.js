import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://icanhazdadjoke.com/slack';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            render: false
        }
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
    }
    async componentDidMount() {

        for (let i = 0; i < 5; i++) {
            let response = await axios.get(API_URL);
            // console.log(response.data);
            let jokeRec = response.data.attachments[0].text;
            this.setState(st => ({
                List: [
                    ...st.List,
                    { joke: jokeRec, votes: 0, id: uuid() }
                ]
            })
            )
        }
        this.setState({
            render: true
        })
    }
    handleUpVote(id) {
        const newState = this.state.List.map((JokeInfo => {
            if (id === JokeInfo.id) {
                return {
                    ...JokeInfo,
                    votes: JokeInfo.votes + 1
                };
            }
            return JokeInfo;
        }));
        this.setState({
            List: newState
        })

    }
    handleDownVote(id) {
        const newState = this.state.List.map((JokeInfo => {
            if (id === JokeInfo.id) {
                return {
                    ...JokeInfo,
                    votes: JokeInfo.votes - 1
                };
            }
            return JokeInfo;
        }));
        this.setState({
            List: newState
        })
    }

    render() {
        let Jokes = this.state.List.map(J => (
            <Joke
                joke={J.joke}
                id={J.id}
                key={J.id}
                votes={J.votes}
                up={this.handleUpVote}
                down={this.handleDownVote}
            />
        ))
        if (this.state.render) {
            return (

                <div>
                    <h1>CHEEZJOKES APP</h1>
                    <h3>{Jokes}</h3>
                </div>
            )
        }
        else {
            return (
                <div className='loader'>

                </div>
            )
        }
    }
}
export default JokesList;
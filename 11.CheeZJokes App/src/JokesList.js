import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    static defaultProps = {
        numJokesToGet: 5
    }
    constructor(props) {
        super(props);
        this.state = {
            List: JSON.parse(window.localStorage.getItem('List')) || []
        }
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.getNewJokes = this.getNewJokes.bind(this);
        this.writeOnStorage = this.writeOnStorage.bind(this);
    }
    async componentDidMount() {
        if (this.state.List.length === 0)
            this.getNewJokes();
    }
    async getNewJokes() {
        let listOfJokes = [];
        for (let i = 0; i < this.props.numJokesToGet; i++) {
            let response = await axios.get(API_URL, {
                headers: { Accept: "application/json" }
            });

            let jokeRec = response.data.joke;
            listOfJokes.push({ joke: jokeRec, votes: 0, id: uuid() })
        }
        this.setState(st => ({
            List: [...st.List,
            ...listOfJokes        //... was the problem
            ]
        }),
            this.writeOnStorage
        )
    }
    writeOnStorage() {
        window.localStorage.setItem(
            'List',
            JSON.stringify(this.state.List)
        );
    }

    // HANDLE VOTES ARE DECREMENTING ONE VALUE FROM ACTUAL WHEN GETTING DATA FROM LOCAL STORAGE

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
        },
            this.writeOnStorage()
        );

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
        },
            this.writeOnStorage()

        );
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

        return (

            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
                    <button onClick={this.getNewJokes}>GET NEW JOKES</button>
                </div>
                <div className='JokeList-jokes'>
                    {Jokes}
                </div>

            </div>
        )

    }
}
export default JokesList;
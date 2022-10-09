import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            ListOfJokes: JSON.parse(window.localStorage.getItem('ListOfJokes')) || '[]'
        }
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.getNewJokes = this.getNewJokes.bind(this);
    }
    async componentDidMount() {
        if (this.state.ListOfJokes.length === 0) {
            this.getNewJokes();
        }
        else {
            this.setState({
                render: true
            })
        }

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
        this.setState({
            ListOfJokes: listOfJokes
        })

        // THIS PIECE OF CODE IS USED TO WRITE DATA TO LOCAL STORAGE

        window.localStorage.setItem(
            'ListOfJokes',
            JSON.stringify(listOfJokes)
        );

    }

    handleUpVote(id) {
        const newState = this.state.ListOfJokes.map((JokeInfo => {
            if (id === JokeInfo.id) {
                return {
                    ...JokeInfo,
                    votes: JokeInfo.votes + 1
                };
            }
            return JokeInfo;
        }));
        this.setState({
            ListOfJokes: newState
        })
        window.localStorage.setItem(
            'ListOfJokes',
            JSON.stringify(this.state.ListOfJokes)
        )

    }
    handleDownVote(id) {
        const newState = this.state.ListOfJokes.map((JokeInfo => {
            if (id === JokeInfo.id) {
                return {
                    ...JokeInfo,
                    votes: JokeInfo.votes - 1
                };
            }
            return JokeInfo;
        }));
        this.setState({
            ListOfJokes: newState
        })
        window.localStorage.setItem(
            'ListOfJokes',
            JSON.stringify(this.state.ListOfJokes)
        )
    }

    render() {
        let Jokes = this.state.ListOfJokes.map(J => (
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

                <div className='JokeList'>
                    <div className='JokeList-sidebar'>
                        <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
                        <button onClick={this.getNewJokes} >New Jokes</button>
                    </div>
                    <div className='JokeList-jokes'>
                        {Jokes}
                    </div>

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
import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    static defaultProps = {
        numJokesToGet:10
    }
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
        let listOfJokes=[];
        for (let i = 0; i < this.props.numJokesToGet; i++) {
            let response = await axios.get(API_URL,{
                headers :{Accept:"application/json"}
            });
            
            let jokeRec = response.data.joke;
            listOfJokes.push({joke:jokeRec,votes: 0, id: uuid()})
        }
        this.setState({
            List: listOfJokes,
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

                <div className='JokeList'>
                    <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
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
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
            List: JSON.parse(window.localStorage.getItem('List')) || [],
            renderLoadingIcon: false
        }
        this.seenJokes = new Set(this.state.List.map(Joke => Joke.joke));

        this.handleVote = this.handleVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        if (this.state.List.length === 0)
            this.handleClick();
    }
    async handleClick() {
        this.setState({ renderLoadingIcon: true }, () => this.getNewJokes())
    }
    async getNewJokes() {
        try {
            let listOfJokes = [];
            while (listOfJokes.length < this.props.numJokesToGet) {
                let response = await axios.get(API_URL, {
                    headers: { Accept: "application/json" }
                });

                let jokeRec = response.data.joke;
                if (!this.seenJokes.has(jokeRec)) {
                    this.seenJokes.add(jokeRec);
                    listOfJokes.push({ joke: jokeRec, votes: 0, id: uuid() });
                }
                else {
                    console.log('FOUND A DUPLICATE');
                    console.log(jokeRec);
                }
            }
            this.setState(st => ({
                renderLoadingIcon: false,
                List: [...st.List,
                ...listOfJokes        //... was the problem
                ]
            }),
                () => this.writeOnStorage()
            )

        }
        catch(err){
            this.setState({
                renderLoadingIcon:false
            },
            alert('BAD REQUEST'));
        }
    }
    writeOnStorage() {
        window.localStorage.setItem(
            'List',
            JSON.stringify(this.state.List)
        );
    }

    // HANDLE VOTES ARE DECREMENTING ONE VALUE FROM ACTUAL WHEN GETTING DATA FROM LOCAL STORAGE

    handleVote(id, num) {
        const newState = this.state.List.map((JokeInfo => {
            if (id === JokeInfo.id) {
                return {
                    ...JokeInfo,
                    votes: JokeInfo.votes + num
                };
            }
            return JokeInfo;
        }));
        this.setState({
            List: newState
        },
            () => this.writeOnStorage()  //ARROW FUNCTION IS NECESSARY OTHERWISE IT IS 
            //SKIPPING LAST STATE CHANGE
        );

    }
    render() {
        // b-a return descending (positive,zero,negaive)
        let JokesSorted=this.state.List.sort((a,b)=>b.votes-a.votes); 
        let Jokes = JokesSorted.map(J => (
            <Joke
                joke={J.joke}
                id={J.id}
                key={J.id}
                votes={J.votes}
                handleVote={this.handleVote}

            />
        ))
        if (!this.state.renderLoadingIcon) {
            return (

                <div className='JokeList'>
                    <div className='JokeList-sidebar'>
                        <h1 className='JokeList-title'><span>DAD</span> JOKES</h1>
                        <button onClick={this.handleClick} className='JokeList-getmore' >FETCH JOKES</button>
                    </div>
                    <div className='JokeList-jokes'>
                        {Jokes}
                    </div>
                </div>

            )
        }

        //LOADING PART

        else {
            return (
                <div className='JokeList-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin' />
                    <h1 className='JokeList-title'>Loading...</h1>
                </div>
            )
        }
    }
}
export default JokesList;
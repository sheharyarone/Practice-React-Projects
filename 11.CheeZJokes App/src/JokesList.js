import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://icanhazdadjoke.com/slack';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: []
        }
    }
    async componentDidMount() {

        for (let i = 0; i < 10; i++) {
            let response = await axios.get(API_URL);
            let joke = response.data.attachments[0].text;
            this.setState(st => ({
                List: [
                    ...st.List,
                    joke
                ]
            })

            )
            console.log(joke);

        }
    }

    render() {
        let ren = this.state.List.map(J => (
            
                <li>
                    {J}
                </li>
            
        ))
        return (
            <div>
                <h1>CHEEZJOKES APP</h1>
                <h3>{ren}</h3>
            </div>
        )
    }
}
export default JokesList;
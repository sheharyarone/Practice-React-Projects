import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';


const API_URL = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

class DeckOfCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck:null
        }
    }

    async componentDidMount(){
        let deck=await axios.get(API_URL);
        this.setState({deck: deck.data});
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default DeckOfCard;
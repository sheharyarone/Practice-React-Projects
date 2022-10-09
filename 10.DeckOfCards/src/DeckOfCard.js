import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card';

class DeckOfCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    async componentDidCount() {
        const url='https://deckofcardsapi.com/api/deck/new/shuffle/';
        let response = axios.get(url);
        let id=response.deck_id;
        const src=''
    }   
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default DeckOfCard;
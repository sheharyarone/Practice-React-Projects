import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';


const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck:{},
            drawn : []
        }
        this.getCard=this.getCard.bind(this);
    }

    async componentDidMount(){
        let deck=await axios.get(API_URL);
        this.setState({deck: deck.data});
    }
    async getCard(){
        const API_CARD=`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`;  
        //make request using deck_id
        //set state using new card info
        try
            {let response=await axios.get(API_CARD);
                if(response.data.remaining===0){
                    throw new Error("NO CARDS LEFT IN DECK !");
                }
        

        let card=response.data.cards[0];
        this.setState(st=>({
            drawn: [
                ...st.drawn,
                {
                    id:card.code,
                    image:card.image
                }
            ]
        }))

    }
    catch(err){
        alert(err);
    }
}
    render() {
        let cardRender = this.state.drawn.map(card=>(
            <Card key={card.id} src={card.image}/>
        ))
        return (
            <div>
                <button onClick={this.getCard}>GET CARD</button>
                {cardRender}
            </div>
        )
    }
}
export default Deck;
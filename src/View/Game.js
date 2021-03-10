import React from 'react';
import { CreateDeckOfCards } from '../Services/CreateDeck';

export default function Game() {
    // 
    //  STATE
    // 
    //  ARRAY of cards
    const [deckOfCards, setDeckOfCards] = React.useState([]);
    //  OBJECT of hands, includes Dealer's hand
    // const [hands, setHands] = React.useState(null);


    const startGame = async () => {
        const newDeck = await CreateDeckOfCards(10);
        setDeckOfCards(newDeck);
    }

    console.log(`deckOfCards: \n ${deckOfCards}\n`);


    return (
        <div>
            <button onClick={startGame}>Start Game</button>
            <p>{deckOfCards}</p>
        </div>
    )
}

import React from 'react';
import CreateDeckOfCards from "../Services/CreateDeck";

export default function DisplayCards() {

    // Need to use HOOKS?
    const createDeck = () => {
        let deckOfCards = CreateDeckOfCards(1);
        return deckOfCards;
    }
    const deck = createDeck();
    console.log(deck);

    return (
        <p>Check Console.log</p>
    )
}

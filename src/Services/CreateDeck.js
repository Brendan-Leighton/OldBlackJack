export const CreateDeckOfCards = async (numberOfDecksToCreate) => {

    console.log('numberOfDecks = ', numberOfDecksToCreate);

    let deckOfCards = [1, 2, 3];

    const createSingleDeck = () => {
        let suits = ['H', 'C', 'D', 'S'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        let singleDeck = [];

        for (let suitCount = 0; suitCount < 4; suitCount++) {
            for (let rankCount = 0; rankCount < 13; rankCount++) {
                singleDeck.push(`${ranks[rankCount]} - ${suits[suitCount]}`);

            }
        }
        return singleDeck;
    }
    const createMultipleDecks = (numberOfDecks) => {
        let newDeck = [];
        for (let i = 0; i < numberOfDecks; i++) {
            let singleDeck = createSingleDeck();
            newDeck = [newDeck, ...singleDeck];
        }
        return newDeck;
    }
    const shuffleDeck = (deck) => {
        for (let i = 0; i < deck.length; i++) {
            let tempCard = deck[i];
            let randomIndex = Math.floor(Math.random() * deck.length);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard;
        }
        return deck;
    }

    deckOfCards = await createMultipleDecks(numberOfDecksToCreate);
    // deckOfCards = createSingleDeck();
    await shuffleDeck(deckOfCards);

    return deckOfCards;

    // const dealDeck = () => {
    //     let deck = this.deck;
    //     for (let i = 0; i < players; i++) {
    //         let tempArray = deck.splice(0, 1);
    //         let cardTwo = players.length - (1 + i);
    //         tempArray += `,${deck.splice(cardTwo, 1)}`;
    //         players[i.hand] = new Array(tempArray);

    //     }
    //     this.deck = deck;
    // }

    // const deleteDeck = () => {
    //     this.deck = [];
    // }



}

// let players = [
//     {
//         name: "dealer",
//         hand: [],
//     },
//     {
//         name: "player_1",
//         hand: [],
//     }
// ]

// let newDeck = DeckObject.create();
// let deck = newDeck.create();
// let shuffledDeck = newDeck.shuffle(deck);

// let playedDeck = newDeck.deal(shuffledDeck);

// console.log(playedDeck);
// console.log(players);
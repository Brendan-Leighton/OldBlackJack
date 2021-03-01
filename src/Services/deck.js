class Deck {
    constructor() { }



    create() {
        let suits = ['H', 'C', 'D', 'S'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        let deck = [];

        for (let suitCount = 0; suitCount < 4; suitCount++) {
            for (let rankCount = 0; rankCount < 13; rankCount++) {
                deck.push(`${ranks[rankCount]} - ${suits[suitCount]}`);

            }
        }
        return deck;
    }
    shuffle(deck) {
        for (let i = 0; i < 52; i++) {
            let tempCard = deck[i];
            let randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard;
        }
        return deck;
    }
    deal(deck) {
        for (let i = 0; i < players; i++) {
            let tempArray = deck.splice(0, 1);
            let cardTwo = players.length - (1 + i);
            tempArray += `,${deck.splice(cardTwo, 1)}`;
            players[i.hand] = new Array(tempArray);

        }
        return deck;
    }
}
let players = [
    {
        name: "dealer",
        hand: [],
    },
    {
        name: "player_1",
        hand: [],
    }
]
let newDeck = new Deck();
let deck = newDeck.create();
let shuffledDeck = newDeck.shuffle(deck);

let playedDeck = newDeck.deal(shuffledDeck);

console.log(playedDeck);
console.log(players);
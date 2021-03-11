import React from 'react';
import { useForm } from 'react-hook-form';



export default function Game() {
    // 
    //  STATE
    // 
    //  ARRAY of cards
    const [deckURL_STATE, setDeckURL_STATE] = React.useState('');
    //  OBJECT of hands, includes Dealer's hand
    const [hands_STATE, setHands_STATE] = React.useState({});

    //  FORM
    const { register, handleSubmit, error } = useForm();

    // only run once the first time this component is rendered
    React.useEffect(() => {
        const checkLocalStorage = async () => {
            //  GET deck url from localStorage
            const lsDeckUrl = localStorage.getItem('deckUrl');
            //  IF deck url exists
            if (lsDeckUrl) {
                //  set the url from localStorage to React's state
                // console.log('lsDeckUrl exists');
                await setDeckURL_STATE(lsDeckUrl);
            } else {
                //  else, GET new deck url and save it to localStorage
                // console.log("lsDeckUrl DOESN'T exists");
                await getNewDeck(1);
                const deckUrl = deckURL_STATE;
                await localStorage.setItem('deckUrl', deckUrl)
            }
        }
        checkLocalStorage();
    }, [deckURL_STATE])

    // console.log('deck url state === ', deckURL_STATE);



    const getNewDeck = async (numOfDecks) => {
        //  FETCH url from api
        const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numOfDecks}`;
        const response = await fetch(url);
        const data = await response.json();
        //  SAVE url to React's state to access this deck later
        await setDeckURL_STATE(`https://deckofcardsapi.com/api/deck/${data.deck_id}/`);
    }

    const shuffleDeck = () => {
        //  TELL deck api to shuffle cards
        const url = `${deckURL_STATE}shuffle/`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                return data;
            })
            .catch(error => console.log(error));
    }

    const createPlayers = (numOfPlayers) => {
        //  https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S

        // console.log(`hands_STATE in state at BEGINNING of create players: \n ${hands_STATE}`);

        localStorage.removeItem('player-hands');
        let newHands = {
            dealer: {
                hand: '',
                score: 0,
                aceAsEleven: false
            },
            players: []
        }
        for (let i = 0; i < numOfPlayers; i++) {
            let newPlayer = {
                name: `player_${i}`,
                hand: '',
                score: 0,
                aceAsEleven: false
            }
            newHands.players.push(newPlayer)
        }
        localStorage.setItem('player-hands', JSON.stringify(newHands));
        setHands_STATE(newHands);

        // console.log(`hands_STATE in state at END of create players: \n ${hands_STATE}`);
    }

    const drawCards = () => {

    }

    const dealCards = async (numOfPlayers) => {
        drawCards();
    }

    const startGame = async (data) => {
        // console.log('data from startGame: \n', data);
        shuffleDeck();
        createPlayers(data.selectNumOfPlayers);
        dealCards(data.selectNumOfPlayers);
        // console.log('submitted form');
    }



    // console.log(`deckOfCards: \n ${deckOfCards}\n`);


    return (
        <div>
            <form className="menu" onSubmit={handleSubmit(startGame)}>
                <div>
                    <label htmlFor="selectNumOfPlayers">Number of Players</label>
                    <select name="selectNumOfPlayers" id="selectNumOfPlayers" ref={register}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <input type="submit" value="Start Game" />
                <button onClick={shuffleDeck}>New Game</button>
            </form>
        </div>
    )
}

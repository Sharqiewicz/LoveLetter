import Engine from './engine/Engine'
import Deck from './classes/DeckClass'

const DECK = new Deck;

const ENGINE = new Engine(DECK);

ENGINE.startGame();
console.log('Works!')
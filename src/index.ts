import { DeckOfCards } from './classes/deck-of-cards';
import { Game } from './classes/game';

// Initializing deck
const newDeck = new DeckOfCards('Jacks Game');

console.log(`The Game you are playing: ${newDeck.getNameOfCardGame()}
Cards Have been shuffled
`);

// --------------------------------------------------------
/// PLAYERS GET THEIR CARDS
const computersHoleCards = newDeck.getNumberOfUniqueCards(2);
console.log(`Computer has their hole cards
    `);

const playersHoleCards = newDeck.getNumberOfUniqueCards(2);
console.log(`Your hole cards are -> [ ${playersHoleCards} ]
`);

/// FLOP is dealt
const boardCards = newDeck.getNumberOfUniqueCards(3);
console.log(`The FLOP is -> [ ${boardCards} ]
`);

// ------------------------------------------------------
/// GAME started
const newGame = new Game(playersHoleCards, computersHoleCards, boardCards);

/// WINNER ANNOUNCED
newGame.getGameResults();

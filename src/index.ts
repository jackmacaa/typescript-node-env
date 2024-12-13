import { DeckOfCards } from './classes/deck-of-cards';
import { Game } from './classes/game';

// Initializing deck
const newDeck = new DeckOfCards('Jacks Game');

console.log(`The Game you are playing: ${newDeck.getNameOfCardGame()}
Cards Have been shuffled
`);

/// GAME started
const newGame = new Game();

// --------------------------------------------------------
/// PLAYERS GET THEIR CARDS
/// COMPUTER
const computersHoleCards = newDeck.getNumberOfUniqueCards(2);
console.log(`Computer has their hole cards
    `);

/// PLAYER
const playersHoleCards = newDeck.getNumberOfUniqueCards(2);

console.log(`Your hole cards are -> [ ${playersHoleCards} ]
`);

/// --------------------------------------------------------

/// FLOP is dealt
const boardCards = newDeck.getNumberOfUniqueCards(3);

console.log(`The FLOP is -> [ ${boardCards} ]
`);

// ------------------------------------------------------
// CHECKING PLAYER AND COMPS HAND RANKS

/// COMPUTER
const computersHand = newGame.calculateHand(computersHoleCards, boardCards);
const computersHandRank = newGame.getHandsRank(computersHand);
/// PLAYER
const playersHand = newGame.calculateHand(playersHoleCards, boardCards);
const playersHandRank = newGame.getHandsRank(playersHand);

const gameResults = newGame.getGameResults(
  { playersHand, playersHandRank, playersHoleCards },
  { computersHand, computersHandRank, computersHoleCards }
);
/// WINNER ANNOUNCED
console.log(gameResults);

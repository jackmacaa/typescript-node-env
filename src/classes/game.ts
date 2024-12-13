export class Game {
  playerScore: number;
  computerScore: number;

  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  getScores() {
    return { playerScore: this.playerScore, computerScore: this.computerScore };
  }

  calculateHand(hand: string[], boardCards: string[]): string {
    if (this.isPocketPair(hand)) {
      return `${hand[0][0]}`;
    }

    return this.getPairOrHighCard(hand, boardCards);
  }

  private isPocketPair(hand: string[]): boolean {
    if (hand[0][0] === hand[1][0]) {
      return true;
    }
    return false;
  }

  private getPairOrHighCard(hand: string[], boardCards: string[]): string {
    for (let i = 0; i < hand.length; i++) {
      const foundPair = boardCards.find((card) => {
        return hand[i][0] === card[0];
      });

      if (foundPair) {
        return foundPair[0];
      }
    }
    return 'High Card';
  }

  getHandsRank(hand: string): number {
    switch (hand[0]) {
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      case 'A':
        return 13;
      default: // High Card
        return 0;
    }
  }

  getGameResults(
    player: {
      playersHand: string;
      playersHandRank: number;
      playersHoleCards: string[];
    },
    computer: {
      computersHand: string;
      computersHandRank: number;
      computersHoleCards: string[];
    }
  ): string {
    if (player.playersHandRank === computer.computersHandRank) {
      return `DRAW -> The Player had [${player.playersHoleCards}] which was ${player.playersHand}'s, The Computer had [${computer.computersHoleCards}] which was ${computer.computersHand}'s`;
    }

    if (player.playersHandRank > computer.computersHandRank) {
      return `PLAYER WINNER with ${player.playersHand}'s, The Computer had [${computer.computersHoleCards}] which was ${computer.computersHand}'s`;
    }

    return `COMPUTER WINNER with ${computer.computersHand}'s, The Player had [${player.playersHoleCards}] which was ${player.playersHand}'s`;
  }

  // look for other hands e.g. flush, boat

  // look for high card
}

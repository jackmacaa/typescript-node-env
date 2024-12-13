export class Game {
  playersHoleCards: string[];
  computersHoleCards: string[];
  boardCards: string[];

  constructor(
    playerHoleCards: string[],
    computerHoleCards: string[],
    boardCards: string[]
  ) {
    this.playersHoleCards = playerHoleCards;
    this.computersHoleCards = computerHoleCards;
    this.boardCards = boardCards;
  }

  private calculateHand(hand: string[], boardCards: string[]): string {
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

  /**
   *
   * @param handValue This is the first char of the card string e.g 'Ac' is 'A' is Ace of clubs, we only care about the card and not not the suit
   * @returns
   */
  private getHandsRank(handValue: string): number {
    switch (handValue) {
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

  getGameResults() {
    const computersHand = this.calculateHand(
      this.computersHoleCards,
      this.boardCards
    );
    const computersHandRank = this.getHandsRank(computersHand[0]);

    const playersHand = this.calculateHand(
      this.playersHoleCards,
      this.boardCards
    );
    const playersHandRank = this.getHandsRank(playersHand[0]);

    this.printGameResults(
      { playersHand, playersHandRank, playersHoleCards: this.playersHoleCards },
      {
        computersHand,
        computersHandRank,
        computersHoleCards: this.computersHoleCards,
      }
    );
  }

  private printGameResults(
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
  ): void {
    const playerStr = `The Player had [${player.playersHoleCards}] which was ${player.playersHand}'s`;
    const computerStr = `The Computer had [${computer.computersHoleCards}] which was ${computer.computersHand}'s`;

    if (player.playersHandRank === computer.computersHandRank) {
      const resultDraw = `DRAW -> ${playerStr} and ${computerStr}`;

      console.log(resultDraw);
    } else if (player.playersHandRank > computer.computersHandRank) {
      const resultPlayerWinner = `PLAYER WINNER -> ${playerStr} and ${computerStr}`;

      console.log(resultPlayerWinner);
    } else {
      const resultComputerWinner = `COMPUTER WINNER -> ${computerStr} and ${playerStr}`;

      console.log(resultComputerWinner);
    }
  }
}

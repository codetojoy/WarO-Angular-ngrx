import { Card, Hand } from "./hand.model";

import { Kitty } from "./hand.model";
import { Player } from "./player.model";

export class Table {
  isInPlay: boolean = false;
  transparencyMode: boolean = false;
  kitty: Kitty = new Hand();
  players: Player[] = [];
  prizeCard: Card;
  discardTotal: number = 0;
  roundNumber: number = 0;

  constructor(kitty?: Kitty, players?: Player[]) {
    if (kitty) {
      this.kitty = kitty;
    }
    if (players) {
      this.players = players;
    }
  }

  endGame(): void {
    if (!this.kitty.isEmpty()) {
      window.alert(`INTERNAL ERROR kitty is not empty`);
    }
    this.prizeCard = null;
    this.isInPlay = false;
  }

  assignPrizeCard(): void {
    this.isInPlay = true;
    this.prizeCard = this.kitty.getCards()[0];
    this.kitty.removeCard(this.prizeCard);
    this.roundNumber++;
  }

  getPrizeCard(): Card {
    return this.prizeCard;
  }

  setTransparencyMode(transparencyMode: boolean) {
    this.players.forEach((player) => player.setIsTransparent(transparencyMode));
    this.transparencyMode = transparencyMode;
  }

  getIsTransparent(): boolean {
    return this.transparencyMode;
  }

  getDiscardTotalForAudit(): number {
    return this.discardTotal;
  }

  discardCardForAudit(card: Card) {
    this.discardTotal += card.value;
  }

  getIsInPlay(): boolean {
    return this.isInPlay;
  }

  toString(): string {
    let result: string = "";
    let prizeCardStr: string = this.prizeCard ? this.prizeCard.toString() : "";
    result += `round #${this.roundNumber} prizeCard: ${prizeCardStr}\n`;
    result += `kitty: ${this.kitty.toString()}\n`;
    this.players.forEach((player) => (result += `${player.toString()}\n`));
    return result;
  }
}

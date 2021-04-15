import { Constants } from "../util/constants";

export class Card {
  value: number = 0;

  constructor(value: number) {
    this.value = value;
  }

  getDisplay(isTransparent?: boolean) {
    let result = Constants.OBSCURED_CARD_VALUE;

    if (isTransparent) {
      result = this.toString();
    }

    return result;
  }

  toString(): string {
    return "" + this.value;
  }
}

export class Hand {
  private cards: Card[] = [];

  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = cards;
    }
  }

  getSumPoints(): number {
    return this.cards.reduce((acc, card) => acc + card.value, 0);
  }

  removeCard(card: Card) {
    this.cards = this.cards.filter((c) => c.value !== card.value);
  }

  isEmpty(): boolean {
    return !this.cards || this.cards.length == 0;
  }

  getCards(): Card[] {
    return this.cards.slice();
  }

  setCards(cards: Card[]) {
    this.cards = cards;
  }

  toString(): string {
    let result: string = "[";
    this.cards.forEach((card) => (result += ` ${card.toString()} `));
    result += "]";
    return result;
  }
}

export type Kitty = Hand;

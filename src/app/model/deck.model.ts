import { Card } from "./hand.model";

export class Deck {
  cards: Card[] = [];

  constructor(private numCards: number) {
    for (let i = 1; i <= numCards; i++) {
      let card: Card = new Card(i);
      this.cards.push(card);
    }
  }

  emitLog(): void {
    this.cards.forEach((card) => console.log(`TRACER c : ${card.toString()}`));
  }

  getCards(): Card[] {
    return this.cards.slice();
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}

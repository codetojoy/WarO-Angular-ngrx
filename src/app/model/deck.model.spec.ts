import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Card } from "./hand.model";
import { Deck } from "./deck.model";

describe("Deck", () => {
  let deck: Deck;
  const NUM_CARDS: number = 10;
  const NUM_MATCHES_THRESHOLD: number = 5;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {});

  it("should shuffle", () => {
    deck = new Deck(NUM_CARDS);
    let originalCards: Card[] = deck.getCards();
    let originalTotal: number = originalCards.reduce((acc, card) => (acc += card.value), 0);

    // test
    deck.shuffle();

    let afterTotal: number = deck.getCards().reduce((acc, card) => (acc += card.value), 0);
    expect(afterTotal).toEqual(originalTotal);

    let afterLength: number = deck.getCards().length;
    expect(afterLength).toEqual(originalCards.length);

    let numMatches: number = 0;
    for (let index = 0; index < originalCards.length; index++) {
      let originalValue: number = originalCards[index].value;
      let newValue: number = deck.getCards()[index].value;
      if (originalValue === newValue) {
        numMatches++;
      }
    }
    expect(numMatches).toBeLessThan(NUM_MATCHES_THRESHOLD);
  });
});

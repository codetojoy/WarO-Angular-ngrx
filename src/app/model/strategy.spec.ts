import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Card, Hand } from "./hand.model";
import { Deck } from "./deck.model";
import { Strategy, NextCard } from "./strategy.model";
import { Player, Players } from "./player.model";

describe("Strategy", () => {
  let strategy: Strategy;
  let prizeCard: Card;
  let hand: Hand;
  const MAX_CARD: number = 30;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {});

  function c(value: number): Card {
    return new Card(value);
  }

  it("should use next card", () => {
    strategy = new NextCard();
    prizeCard = c(10);
    let expected: Card = c(1);
    hand = new Hand([expected, c(2), c(3)]);

    // test
    let result: Card = strategy.select(prizeCard, hand, MAX_CARD);

    expect(result.value).toEqual(expected.value);
  });
});

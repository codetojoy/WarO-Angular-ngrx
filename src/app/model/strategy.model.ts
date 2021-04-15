import { Constants } from "../util/constants";
import { Card, Hand } from "./hand.model";

export interface Strategy {
  select(prizeCard: Card, hand: Hand, maxCard: number): Card;
  getName(): string;
}

export class NextCard implements Strategy {
  select(prizeCard: Card, hand: Hand, maxCard: number): Card {
    return hand.getCards()[0];
  }

  getName(): string {
    return Constants.STRATEGY_NEXT;
  }
}

export class UserChoice implements Strategy {
  select(prizeCard: Card, hand: Hand, maxCard: number): Card {
    // TODO: consider a way that this is used by the main algo
    // e.g. have a reflexive provider that, for this one, is the card the user chose
    window.alert(`INTERNAL ERROR UserChoice strategy`);
    return null;
  }

  getName(): string {
    return Constants.STRATEGY_USER;
  }
}

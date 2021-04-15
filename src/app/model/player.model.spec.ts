import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Card } from "./hand.model";
import { Deck } from "./deck.model";
import { Player, Players } from "./player.model";

describe("Players", () => {
  let players: Players = new Players();
  const NUM_CARDS: number = 10;
  const NUM_MATCHES_THRESHOLD: number = 3;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {});

  it("should find user player", () => {
    let p1: Player = new Player("beethoven", null, null);
    let p2: Player = new Player("you", null, null);
    let p3: Player = new Player("mozart", null, null);

    p2.isInteractive = true;
    let playerList: Player[] = [p1, p2, p3];

    // test
    let result: Player = players.findUser(playerList);

    expect(result.name).toEqual("you");
  });

  it("should find game winner", () => {
    let p1: Player = new Player("beethoven", null, null);
    let p2: Player = new Player("chopin", null, null);
    let p3: Player = new Player("mozart", null, null);

    p1.getPlayerStats().addPoints(10);
    p2.getPlayerStats().addPoints(20);
    p3.getPlayerStats().addPoints(30);
    let playerList: Player[] = [p1, p2, p3];

    // test
    let result: Player = players.findGameWinner(playerList);

    expect(result.name).toEqual("mozart");
  });
});

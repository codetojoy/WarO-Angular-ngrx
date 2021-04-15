import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Card, Hand } from "../model/hand.model";
import { Deck } from "../model/deck.model";
import { Strategy, NextCard } from "../model/strategy.model";
import { Player, Players, Bid } from "../model/player.model";
import { ConfigService } from "./config.service";
import { DealerService } from "./dealer.service";
import { StrategyService } from "./strategy.service";
import { AuditService } from "./audit.service";

describe("Dealer Service", () => {
  let dealerService: DealerService;

  beforeEach(() => {
    let strategyService: StrategyService = new StrategyService();
    let configService: ConfigService = new ConfigService(strategyService);
    let auditService: AuditService = new AuditService(configService);
    dealerService = new DealerService(auditService, configService);
  });

  function c(value: number): Card {
    return new Card(value);
  }

  it("should find winning bid", () => {
    let p1: Player = new Player("mozart", null, null);
    let p2: Player = new Player("chopin", null, null);
    let p3: Player = new Player("beethoven", null, null);

    let bid1: Bid = new Bid(p1, c(10));
    let bid2: Bid = new Bid(p2, c(20));
    let bid3: Bid = new Bid(p3, c(30));
    let bids: Bid[] = [bid1, bid2, bid3];

    // test
    let result: Bid = dealerService.findWinningBid(bids);

    expect(result.player.name).toEqual(p3.name);
  });
});

import { TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Card } from "../model/hand.model";
import { Bid, Player } from "../model/player.model";
import * as fromApp from "../store/app.reducer";
import { AuditService } from "./audit.service";
import { ConfigService } from "./config.service";
import { DealerService } from "./dealer.service";
import { StrategyService } from "./strategy.service";

describe("Dealer Service", () => {
  let dealerService: DealerService;
  const initialState = fromApp.initialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
        provideMockStore({}),
        // other providers
      ],
    });

    let store = TestBed.inject(MockStore);
    let strategyService: StrategyService = new StrategyService();
    let configService: ConfigService = new ConfigService(strategyService);
    let auditService: AuditService = new AuditService(store);
    dealerService = new DealerService(auditService, configService, store);
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

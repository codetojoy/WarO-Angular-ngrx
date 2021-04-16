import { Injectable } from "@angular/core";
import { Player } from "../model/player.model";
import { Strategy } from "../model/strategy.model";
import { Constants } from "../util/constants";
import { StrategyService } from "./strategy.service";

// major TODO:
// We should put Players or Table into a ngrx Store, but that is a very large
// re-design.

@Injectable()
export class ConfigService {
  // events for DealerService because it isn't "need to know", whereas StrategyService is
  private players: Player[] = [];

  constructor(private strategyService: StrategyService) {
    const nextCardStrategy: Strategy = this.strategyService.getStrategy(Constants.STRATEGY_NEXT);
    const userStrategy: Strategy = this.strategyService.getStrategy(Constants.STRATEGY_USER);
    this.players.push(new Player("Beethoven", nextCardStrategy));
    this.players.push(new Player("Chopin", nextCardStrategy));
    this.players.push(new Player("Mozart", nextCardStrategy));
    this.players.push(new Player("You", userStrategy, true));
  }

  getPlayers(): Player[] {
    return this.players;
  }
}

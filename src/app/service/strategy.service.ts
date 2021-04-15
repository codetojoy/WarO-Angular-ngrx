import { NextCard, Strategy, UserChoice } from "../model/strategy.model";
import { Constants } from "../util/constants";

export class StrategyService {
  getStrategy(name: string): Strategy {
    let strategy: Strategy = null;
    switch (name) {
      case Constants.STRATEGY_NEXT: {
        strategy = new NextCard();
        break;
      }
      case Constants.STRATEGY_USER: {
        strategy = new UserChoice();
        break;
      }
      default:
        window.alert(`INTERNAL ERROR unknown strategy: ${name}`);
        break;
    }
    return strategy;
  }
}

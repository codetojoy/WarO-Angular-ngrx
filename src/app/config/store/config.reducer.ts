import { Action } from "@ngrx/store";
import * as ConfigActions from "./config.actions";

export interface State {
  numCards: number;
  numCardsInHand: number;
  maxCard: number;
  isTransparentMode: boolean;
}

export const initialState: State = {
  numCards: 15,
  // TODO: this is dependent on player array
  numCardsInHand: 3,
  maxCard: 15,
  isTransparentMode: false,
};

export function configReducer(state: State = initialState, action: Action) {
  console.log(`TRACER 19-APR config reducer ${action.type}`);
  switch (action.type) {
    case ConfigActions.UPDATE_NUM_CARDS:
      const updateNumCardsAction = action as ConfigActions.UpdateNumCards;
      const numCards = updateNumCardsAction.payload;
      const maxCard = numCards;
      return {
        ...state,
        numCards: numCards,
        maxCard: maxCard,
      };
    case ConfigActions.TOGGLE_TRANSPARENCY_MODE:
      const isTransparentMode = !state.isTransparentMode;
      return {
        ...state,
        isTransparentMode: isTransparentMode,
      };
    case ConfigActions.TEST_ACTION:
      const testAction = action as ConfigActions.TestAction;
      const payload = testAction.payload;
      console.log(`TRACER 19-APR testAction.payload: ${payload}`);
      return {
        ...state,
      };
    default:
      return state;
  }
}

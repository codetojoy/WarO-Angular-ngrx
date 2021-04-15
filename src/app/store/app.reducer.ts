import { ActionReducerMap } from "@ngrx/store";
import * as fromConfig from "../config/store/config.reducer";

export interface AppState {
  config: fromConfig.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  config: fromConfig.configReducer,
};

export const initialState = {
  config: fromConfig.initialState,
};

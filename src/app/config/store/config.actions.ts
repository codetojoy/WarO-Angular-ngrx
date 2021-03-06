import { Action } from "@ngrx/store";

export const TEST_ACTION = "[config] TEST_ACTION";
export const UPDATE_NUM_CARDS = "[config] UPDATE_CONFIG";
export const TOGGLE_TRANSPARENCY_MODE = "[config] TOGGLE_TRANSPARENCY_MODE";

export class TestAction implements Action {
  readonly type = TEST_ACTION;;
  constructor(public payload: string) {}
}

export class UpdateNumCards implements Action {
  readonly type = UPDATE_NUM_CARDS;
  constructor(public payload: number) {}
}

export class ToggleTransparencyMode implements Action {
  readonly type = TOGGLE_TRANSPARENCY_MODE;
  constructor() {}
}

export type ConfigActions = TestAction | UpdateNumCards | ToggleTransparencyMode;


import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConfigActions from './config.actions';

@Injectable()
export class ConfigEffects {

  @Effect({ dispatch: false })
  updateNumCardsSuccess = this.actions$.pipe(
    ofType(ConfigActions.UPDATE_NUM_CARDS),
    tap(() => {
      console.log(`TRACER config effects updateNumCards 19-APR-2021`);
    })
  );

  // return TestAction as a chained operation
  @Effect()
  toggleTransparencySuccess = this.actions$.pipe(
    ofType(ConfigActions.TOGGLE_TRANSPARENCY_MODE),
    map(() => {
      console.log(`TRACER config effects toggleTransparency 19-APR-2021`);
      return new ConfigActions.TestAction("TRACER from-effect");
    })
  );

  @Effect({ dispatch: false })
  testSuccess = this.actions$.pipe(
    ofType(ConfigActions.TEST_ACTION),
    tap(() => {
      console.log(`TRACER config effects testAction 19-APR-2021`);
    })
  );

  constructor(private actions$: Actions) {}
}


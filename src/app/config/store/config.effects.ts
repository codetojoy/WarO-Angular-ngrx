
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConfigActions from './config.actions';

@Injectable()
export class ConfigEffects {

/*
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }
        )
        .pipe(
          map(resData => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );
            return new AuthActions.Login({
              email: resData.email,
              userId: resData.localId,
              token: resData.idToken,
              expirationDate: expirationDate
            });
          }),
          catchError(errorRes => {
            let errorMessage = 'An unknown error occurred!';
            if (!errorRes.error || !errorRes.error.error) {
              return of(new AuthActions.LoginFail(errorMessage));
            }
            switch (errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
            }
            return of(new AuthActions.LoginFail(errorMessage));
          })
        );
    })
  );
*/

  @Effect({ dispatch: false })
  updateNumCardsSuccess = this.actions$.pipe(
    ofType(ConfigActions.UPDATE_NUM_CARDS),
    tap(() => {
      console.log(`TRACER config effects updateNumCards 19-APR-2021`);
    })
  );

  @Effect({ dispatch: false })
  toggleTransparencySuccess = this.actions$.pipe(
    ofType(ConfigActions.TOGGLE_TRANSPARENCY_MODE),
    tap(() => {
      console.log(`TRACER config effects toggleTransparency 19-APR-2021`);
    })
  );

  constructor(private actions$: Actions) {}
}


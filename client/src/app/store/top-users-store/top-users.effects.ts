import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TopUsersActions from './top-users.actions';
import { environment as env } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class TopUsersEffects {
    apiBaseUrl: string = env.apiBaseUrl;

    @Effect()
    topUsers$: Observable<Action> = this.actions$.pipe(
      ofType(TopUsersActions.GET_TOP_USERS),
      switchMap((action: TopUsersActions.GetTopUsers) =>
        this.http.get(this.apiBaseUrl + 'user/list/top').pipe(
          map(value => ({ type: TopUsersActions.GET_TOP_USERS_SUCCESS, payload: value})),
          catchError(err => of(new TopUsersActions.GetTopUsersFail()))
        )
      )
    );

  constructor(private http: HttpClient,
    private actions$: Actions) {}

}

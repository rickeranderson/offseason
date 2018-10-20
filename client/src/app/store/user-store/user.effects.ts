import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { environment as env } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    apiBaseUrl: string = env.apiBaseUrl;

    @Effect()
    user$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.GET_USERS),
      switchMap((action: UserActions.GetUsers) =>
        this.http.get(this.apiBaseUrl + 'user/player').pipe(
          map(value => ({ type: UserActions.GET_USERS_SUCCESS, payload: value})),
          catchError(err => of(new UserActions.GetUsersFail()))
        )
      )
    );

    @Effect()
    updateUser$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.UPDATE_USER),
      switchMap((action: UserActions.UpdateUser) =>
        this.http.post(this.apiBaseUrl + 'user/update', action.payload).pipe(
          map(value => ({ type: UserActions.UPDATE_USER_SUCCESS, payload: value})),
          catchError(err => of(new UserActions.UpdateUserFail()))
        )
      )
    );

    @Effect()
    createUser$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.CREATE_USER),
      switchMap((action: UserActions.CreateUser) =>
        this.http.post(this.apiBaseUrl + 'user/create', action.payload).pipe(
          map(value => ({ type: UserActions.CREATE_USER_SUCCESS, payload: value})),
          catchError(err => of(new UserActions.CreateUserFail()))
        )
      )
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
      ofType(UserActions.DELETE_USER),
      switchMap((action: UserActions.DeleteUser) =>
        this.http.delete(this.apiBaseUrl + 'user/delete/' + action.payload).pipe(
          map(value => ({ type: UserActions.DELETE_USER_SUCCESS, payload: action.payload})),
          catchError(err => of(new UserActions.DeleteUserFail()))
        )
      )
    );

  constructor(private http: HttpClient,
    private actions$: Actions) {}

}

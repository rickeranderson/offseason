import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ActivityActions from './activity.actions';
import { environment as env } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ActivityEffects {
    apiBaseUrl: string = env.apiBaseUrl;

    @Effect()
    user$: Observable<Action> = this.actions$.pipe(
      ofType(ActivityActions.GET_ACTIVITYLIST),
      switchMap((action: ActivityActions.GetActivityList) =>
        this.http.get(this.apiBaseUrl + 'activity/list').pipe(
          map(value => ({ type: ActivityActions.GET_ACTIVITYLIST_SUCCESS, payload: value})),
          catchError(err => of(new ActivityActions.GetActivityListFail()))
        )
      )
    );

  constructor(private http: HttpClient,
    private actions$: Actions) {}

}

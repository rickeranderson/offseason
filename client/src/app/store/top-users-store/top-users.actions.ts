import { Action } from '@ngrx/store';
import { TopUser } from '../../core/models/activity.model';

export const GET_TOP_USERS = '[User] GetTopUsers';
export class GetTopUsers implements Action {
    readonly type = GET_TOP_USERS;
    constructor() { }
}

export const GET_TOP_USERS_SUCCESS = '[User] GetTopUsers_Success';
export class GetTopUsersSuccess implements Action {
    readonly type = GET_TOP_USERS_SUCCESS;
    constructor(public payload?: TopUser[]) { }
}

export const GET_TOP_USERS_FAIL = '[User] GetTopUsers_Fail';
export class GetTopUsersFail implements Action {
    readonly type = GET_TOP_USERS_FAIL;
    constructor(public payload?: any) { }
}

export type All
    = GetTopUsers
    | GetTopUsersSuccess
    | GetTopUsersFail;

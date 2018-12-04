import { Action } from '@ngrx/store';
import { ActivityDefinition } from '../../core/models/activity.model';

export const GET_ACTIVITYLIST = '[User] GetActivityList';
export class GetActivityList implements Action {
    readonly type = GET_ACTIVITYLIST;
    constructor() { }
}

export const GET_ACTIVITYLIST_SUCCESS = '[User] GetActivityList_Success';
export class GetActivityListSuccess implements Action {
    readonly type = GET_ACTIVITYLIST_SUCCESS;
    constructor(public payload?: ActivityDefinition[]) { }
}

export const GET_ACTIVITYLIST_FAIL = '[User] GetActivityList_Fail';
export class GetActivityListFail implements Action {
    readonly type = GET_ACTIVITYLIST_FAIL;
    constructor(public payload?: any) { }
}

export const GET_WAKE = '[Api] GetWake';
export class GetWake implements Action {
    readonly type = GET_WAKE;
    constructor() { }
}

export const GET_WAKE_SUCCESS = '[Api] GetWake_Success';
export class GetWakeSuccess implements Action {
    readonly type = GET_WAKE_SUCCESS;
    constructor(public payload?: any) { }
}

export const GET_WAKE_FAIL = '[Api] GetWake_Fail';
export class GetWakeFail implements Action {
    readonly type = GET_WAKE_FAIL;
    constructor(public payload?: any) { }
}

export type All
    = GetActivityList
    | GetActivityListSuccess
    | GetActivityListFail
    | GetWake
    | GetWakeSuccess
    | GetWakeFail;

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

export type All
    = GetActivityList
    | GetActivityListSuccess
    | GetActivityListFail;

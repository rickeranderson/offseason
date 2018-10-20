import { Action } from '@ngrx/store';
import { User, UserRequest } from '../../core/models/user.model';

export const GET_USERS = '[User] GetUsers';
export class GetUsers implements Action {
    readonly type = GET_USERS;
    constructor() { }
}

export const GET_USERS_SUCCESS = '[User] GetUsers_Success';
export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;
    constructor(public payload?: User[]) { }
}

export const GET_USERS_FAIL = '[User] GetUsers_Fail';
export class GetUsersFail implements Action {
    readonly type = GET_USERS_FAIL;
    constructor(public payload?: any) { }
}

export const UPDATE_USER = '[User] UpdateUser';
export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload?: User) { }
}

export const UPDATE_USER_SUCCESS = '[User] UpdateUser_Success';
export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;
    constructor(public payload?: User) { }
}

export const UPDATE_USER_FAIL = '[User] UpdateUser_Fail';
export class UpdateUserFail implements Action {
    readonly type = UPDATE_USER_FAIL;
    constructor(public payload?: any) { }
}

export const CREATE_USER = '[User] CreateUser';
export class CreateUser implements Action {
    readonly type = CREATE_USER;
    constructor(public payload?: UserRequest) { }
}

export const CREATE_USER_SUCCESS = '[User] CreateUser_Success';
export class CreateUserSuccess implements Action {
    readonly type = CREATE_USER_SUCCESS;
    constructor(public payload?: User) { }
}

export const CREATE_USER_FAIL = '[User] CreateUser_Fail';
export class CreateUserFail implements Action {
    readonly type = CREATE_USER_FAIL;
    constructor(public payload?: any) { }
}

export const DELETE_USER = '[User] DeleteUser';
export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload?: string) { }
}

export const DELETE_USER_SUCCESS = '[User] DeleteUser_Success';
export class DeleteUserSuccess implements Action {
    readonly type = DELETE_USER_SUCCESS;
    constructor(public payload?: string) { }
}

export const DELETE_USER_FAIL = '[User] DeleteUser_Fail';
export class DeleteUserFail implements Action {
    readonly type = DELETE_USER_FAIL;
    constructor(public payload?: any) { }
}

export type All
    = GetUsers
    | GetUsersSuccess
    | GetUsersFail
    | UpdateUser
    | UpdateUserSuccess
    | UpdateUserFail
    | CreateUser
    | CreateUserSuccess
    | CreateUserFail
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFail;

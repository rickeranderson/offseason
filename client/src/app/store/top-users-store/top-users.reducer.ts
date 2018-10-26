import * as TopUsersActions from './top-users.actions';
import { TopUser } from '../../core/models/activity.model';

export type Action = TopUsersActions.All;

const defaultTopUsersState: TopUser[] = [];

export function topUsersReducer(state = defaultTopUsersState, action: Action) {
    switch (action.type) {

        case TopUsersActions.GET_TOP_USERS:
            return [ ...state ];

        case TopUsersActions.GET_TOP_USERS_SUCCESS:
            return [ ...action.payload ];

        case TopUsersActions.GET_TOP_USERS_FAIL:
            return [ ...state ];

        default:
            return state;
    }
}

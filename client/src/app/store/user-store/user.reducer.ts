import * as UserActions from './user.actions';
import { User } from '../../core/models/user.model';

export type Action = UserActions.All;

const defaultUserState: User[] = [];

export function userReducer(state = defaultUserState, action: Action) {
    switch (action.type) {

        case UserActions.GET_USERS:
            return [ ...state ];

        case UserActions.GET_USERS_SUCCESS:
            return [ ...action.payload ];

        case UserActions.GET_USERS_FAIL:
            return [ ...state ];

        case UserActions.UPDATE_USER:
            return [ ...state ];

        case UserActions.UPDATE_USER_SUCCESS:
            const tmp = [...state];
            tmp[tmp.indexOf(tmp.find(x => x.id === action.payload.id))] = action.payload;
            return [ ...tmp ];

        case UserActions.UPDATE_USER_FAIL:
            return [ ...state ];

        case UserActions.CREATE_USER:
            return [ ...state ];

        case UserActions.CREATE_USER_SUCCESS:
            const tmpNewUser = [ ...state ];
            tmpNewUser.push(action.payload);
            return [ ...tmpNewUser ];

        case UserActions.CREATE_USER_FAIL:
            return [ ...state ];

        case UserActions.DELETE_USER:
            return [ ...state ];

        case UserActions.DELETE_USER_SUCCESS:
            const tmpDelUser = [ ...state ];
            tmpDelUser.splice(tmpDelUser.findIndex(x => x.id === action.payload), 1);
            return [ ...tmpDelUser ];

        case UserActions.DELETE_USER_FAIL:
            return [ ...state ];

        case UserActions.CREATE_USER_ACTIVITY:
            return [ ...state ];

        case UserActions.CREATE_USER_ACTIVITY_SUCCESS:
            const tmpNewActivity = [...state];
            tmpNewActivity[tmpNewActivity.indexOf(tmpNewActivity.find(x => x.id === action.payload.id))] = action.payload;
            return [ ...tmpNewActivity ];

        case UserActions.CREATE_USER_ACTIVITY_FAIL:
            return [ ...state ];

        case UserActions.UPDATE_USER_ACTIVITY:
            return [ ...state ];

        case UserActions.UPDATE_USER_ACTIVITY_SUCCESS:
            const tmpUpdateActivity = [...state];
            tmpUpdateActivity[tmpUpdateActivity.indexOf(tmpUpdateActivity.find(x => x.id === action.payload.id))] = action.payload;
            return [ ...tmpUpdateActivity ];

        case UserActions.UPDATE_USER_ACTIVITY_FAIL:
            return [ ...state ];

        case UserActions.DELETE_USER_ACTIVITY:
            return [ ...state ];

        case UserActions.DELETE_USER_ACTIVITY_SUCCESS:
            const tmpState = [ ...state ];
            const user = tmpState[tmpState.indexOf(tmpState.find(x => x.id === action.payload.playerId))];
            user.activityList.splice(user.activityList.findIndex(x => x.id === action.payload.activityId));

            tmpState[tmpState.indexOf(tmpState.find(x => x.id === action.payload.playerId))] = user;

            return [ ...tmpState ];

        case UserActions.DELETE_USER_ACTIVITY_FAIL:
            return [ ...state ];

        default:
            return state;
    }
}

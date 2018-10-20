import * as ActivityActions from './activity.actions';
import { ActivityDefinition } from '../../core/models/activity.model';

export type Action = ActivityActions.All;

const defaultActivityListState: ActivityDefinition[] = [];

export function activityReducer(state = defaultActivityListState, action: Action) {
    switch (action.type) {

        case ActivityActions.GET_ACTIVITYLIST:
            return [ ...state ];

        case ActivityActions.GET_ACTIVITYLIST_SUCCESS:
            return [ ...action.payload ];

        case ActivityActions.GET_ACTIVITYLIST_FAIL:
            return [ ...state ];

        default:
            return state;
    }
}

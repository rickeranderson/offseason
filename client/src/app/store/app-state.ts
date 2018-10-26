import { User } from '../core/models/user.model';
import { ActivityDefinition, TopUser } from '../core/models/activity.model';

export interface AppState {
    users: User[];
    activityList: ActivityDefinition[];
    topUsers: TopUser[];
}

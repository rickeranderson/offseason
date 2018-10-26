import { Activity } from './activity.model';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    activityList: Activity[];
}

export interface UserRequest {
    firstName: string;
    lastName: string;
}

export interface CreateUserActivityRequest {
    playerId: string;
    activity: Activity;
}

export interface UpdateUserActivityRequest extends CreateUserActivityRequest {
    activityId: string;
}

export interface DeleteUserActivityRequest {
    playerId: string;
    activityId: string;
}

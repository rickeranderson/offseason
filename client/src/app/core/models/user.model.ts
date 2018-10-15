import { Activity } from './activity.model';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    activityList: Activity[];
}

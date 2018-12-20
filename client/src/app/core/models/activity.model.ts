export interface Activity {
    id: string;
    activityId: number;
    amount: number;
    timestampUtc: Date;
}

export interface ActivityDefinition {
    id: number;
    description: string;
    value: number;
}

export interface TopUser {
    firstName: string;
    lastName: string;
    total: number;
}

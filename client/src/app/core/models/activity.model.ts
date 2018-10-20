export interface Activity {
    id: string;
    activityId: number;
    amount: number;
}

export interface ActivityDefinition {
    id: number;
    description: string;
    value: number;
    timestampUtc: Date;
}

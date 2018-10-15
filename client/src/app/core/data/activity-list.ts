export const ActivityList: ActivityBase[] = [
    {
        id: 0,
        description: 'Weightlifting',
        value: 2
    },
    {
        id: 1,
        description: 'Yoga/Stretching',
        value: 2
    },
    {
        id: 2,
        description: 'Running/Cardio',
        value: 2
    },
    {
        id: 3,
        description: 'Other Conditioning',
        value: 2
    },
    {
        id: 4,
        description: 'Practice',
        value: 1
    },
    {
        id: 5,
        description: 'Recreational Activities',
        value: 0.5
    },
];

export interface ActivityBase {
    id: number;
    description: string;
    value: number;
}

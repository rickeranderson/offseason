export interface Duration {
    id: number;
    description: string;
    value: number;
}

export const DurationList: Duration[] = [
    {
        id: 0,
        description: '15 min',
        value: 0.25
    },
    {
        id: 1,
        description: '30 min',
        value: 0.5
    },
    {
        id: 2,
        description: '45 min',
        value: 0.75
    },
    {
        id: 3,
        description: '60 min',
        value: 1
    },
    {
        id: 4,
        description: '90 min',
        value: 1.5
    },
    {
        id: 5,
        description: '120 min',
        value: 2
    },
    {
        id: 6,
        description: '120+ min',
        value: 2.5
    },
];

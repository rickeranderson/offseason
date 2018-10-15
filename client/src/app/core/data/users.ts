import { User } from '../models/user.model';

export class UserData {
    public getMockAdmins(): User[] {
        const admin: User[] =
        [
            {
            id: '166037b6-f641-44d2-a704-7f5681ffeb81',
            firstName: 'Super',
            lastName: 'Admin',
            role: 'Administrator',
            activityList: []
            }
        ];
        return admin;
    }

    public getMockPlayers() {
        const player: User[] =
        [
            {
            id: 'fe6e4b47-acdd-437f-b76a-cc0af0936928',
            firstName: 'Normal',
            lastName: 'Player',
            role: 'Player',
            activityList: [
                {
                    id: 'ab6e4b47-acfd-477f-b71a-cc0af0001007',
                    activityId: 3,
                    amount: 0.25
                },
                {
                    id: 'ab6e4b47-acfd-477f-b71a-cc0a62531007',
                    activityId: 1,
                    amount: 2
                }
            ]
            }
        ];
        return player;
    }
}



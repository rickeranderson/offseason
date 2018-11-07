import { User } from '../models/user.model';

export class AuthData {
    private admin = 'adminRacers!';
    private player = 'racers!';

    constructor() {
    }

    public getAdminPassword() {
        return this.admin;
    }

    public getPlayerPassword() {
        return this.player;
    }
}

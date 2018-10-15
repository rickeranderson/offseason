import { User } from '../models/user.model';

export class AuthData {
    private admin = 'adminPassword';
    private player = 'userPassword';

    constructor() {
    }

    public getAdminPassword() {
        return this.admin;
    }

    public getPlayerPassword() {
        return this.player;
    }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from './login.service';
import { UserData as UserData} from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  userData: UserData;

  constructor(private loginService: LoginService) {
    this.userData = new UserData();
  }

  selectUser(user: User) {
    this.currentUser = user;
  }

  getAdminList() {
    // if (this.loginService.isAdmin()) {
    if (true) {
      return this.userData.getMockAdmins();
    }
  }

  getPlayerList() {
    return this.userData.getMockPlayers();
  }

  getUserById(id: string): User {
    return this.userData.getMockAdmins().find(x => x.id === id);
  }

  getPlayerById(id: string): User {
    return this.userData.getMockPlayers().find(x => x.id === id);
  }
}

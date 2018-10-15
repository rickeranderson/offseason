import { Injectable } from '@angular/core';
import { AuthData as AuthData} from '../data/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authData: AuthData;
  private admin = false;

  constructor(private router: Router) {
    this.authData = new AuthData();
  }

  login(password: string): boolean {
    switch (password) {
      case this.authData.getAdminPassword():
        this.loginAdmin();
        return true;
      case this.authData.getPlayerPassword():
        this.loginPlayer();
        return true;
      default:
        return false;
    }
  }

  private loginAdmin() {
    this.admin = true;
    this.router.navigate(['admin']);
  }

  private loginPlayer() {
    this.router.navigate(['player']);
  }

  isAdmin() {
    return this.admin;
  }
}

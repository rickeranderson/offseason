import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    let canActive = false;
    if (this.loginService.isAdmin()) {
        canActive = true;
    }
    if (!canActive) {
      this.router.navigate(['']);
    }
    return canActive;
  }
}

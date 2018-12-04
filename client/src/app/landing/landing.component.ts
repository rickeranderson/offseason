import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import { GetActivityList, GetWake } from '../store/activity-store/activity.actions';
import { userReducer } from '../store/user-store/user.reducer';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  password: string;

  constructor(private loginService: LoginService, public snackBar: MatSnackBar, private store: Store<AppState>) { }

  ngOnInit() {
    this.wake();
  }

  login() {
    if (!this.loginService.login(this.password)) {
      this.openSnackBar('Incorrect Password', 'Error');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  wake() {
    this.store.dispatch(new GetWake());
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { GetUsers } from '../../store/user-store/user.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  styleUrls: ['./player-landing.component.scss']
})
export class PlayerLandingComponent implements OnInit, OnDestroy {
  user: User;
  userList: User[];
  userList$: Subscription;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.getUserList();
  }

  ngOnDestroy() {
    this.userList$.unsubscribe();
  }

  getUserList() {
    this.store.dispatch(new GetUsers());
    this.userList$ = this.store.select(x => x.users).subscribe(val => {
      this.userList = val;
    });
  }

  selectUser(user: User) {
    this.router.navigate(['player/' + user.id]);
  }
}

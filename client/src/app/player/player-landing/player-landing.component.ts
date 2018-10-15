import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  styleUrls: ['./player-landing.component.scss']
})
export class PlayerLandingComponent implements OnInit {
  user: User;
  userList: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userList = this.userService.getPlayerList();
  }

  selectUser(user: User) {
    this.userService.selectUser(user);
    console.log('User', user);
    this.router.navigate(['player/' + user.id]);
  }
}

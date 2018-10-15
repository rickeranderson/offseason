import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {
  user: User;
  userList: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.currentUser;
    this.getUserList();
  }

  getUserList() {
    this.userList = this.userService.getAdminList();
  }

  selectUser(user: User) {
    this.userService.selectUser(user);
    console.log('user', user);
    this.router.navigate(['admin/' + user.id]);
  }
}

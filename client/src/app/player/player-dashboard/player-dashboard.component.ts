import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss']
})
export class PlayerDashboardComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const userId = this.route.snapshot.paramMap.get('userId');
    console.log(userId);
    this.user = this.userService.getPlayerById(userId);
    console.log(this.user);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Activity, ActivityDefinition } from 'src/app/core/models/activity.model';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {
  players: User[];
  activityList: ActivityDefinition[];

  constructor(private userService: UserService, private activityService: ActivityService) { }

  ngOnInit() {
    this.getPlayers();
    this.getAllActivityList();
  }

  getPlayers() {
    this.userService.getPlayerList().subscribe(val => {
      this.players = val;
    });
  }

  getAllActivityList() {
    this.activityService.getActivityList().subscribe(val => {
      this.activityList = val as ActivityDefinition[];
    });
  }

  calculatePlayerTotal(player: User) {
    let total = 0;
    player.activityList.forEach(a => {
      total = total + a.amount * this.activityList.find(x => x.id === a.activityId).value;
    });
    return total;
  }

}

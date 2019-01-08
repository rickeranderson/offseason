import { Component, OnInit, OnDestroy } from '@angular/core';
import { TopUser, ActivityDefinition } from '../models/activity.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { BarData } from '../../admin/admin-landing/all-players-graph/all-players-graph.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-weekly-board',
  templateUrl: './weekly-board.component.html',
  styleUrls: ['./weekly-board.component.scss']
})
export class WeeklyBoardComponent implements OnInit, OnDestroy {

  topUsers: TopUser[] = [];
  topUsers$: Subscription;

  dayOne: Date;
  daySeven: Date;

  done = false;

  barChartOptions: any;
  barChartLabels: string[];
  barChartData: any[];
  barChartType = 'bar';
  barChartLegend = true;

  dayOffset = 0;

  activityList: any;
  users: User[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getWeeklyTopUsers();
  }

  ngOnDestroy() {
    this.topUsers$.unsubscribe();
  }

  getWeeklyTopUsers() {
    this.topUsers$ = this.store.select(x => x.users).subscribe(users => {
      this.store.select(x => x.activityList).subscribe(activityList => {
        if (users && activityList && users.length > 0 && activityList.length > 0) {
          this.activityList = activityList;
          this.users = users;
          const topFive = this.getTopFiveInThisWeek(users, activityList, this.dayOffset);
          this.topUsers = topFive;
          if (users.length > 0) {
            this.setupChart();
            this.setData(topFive);
          }
        }
      });
    });
  }

  getTopFiveInThisWeek(users: User[], activityList: ActivityDefinition[], offset: number): TopUser[] {
    const topUsers: TopUser[] = [];
    const tmpUsers: User[] = [];

    const firstDayOfWeek = this.getMonday();
    firstDayOfWeek.setHours(firstDayOfWeek.getHours() + (offset * 24));
    this.dayOne = firstDayOfWeek;
    // console.log('firstday', firstDayOfWeek);

    const lastDayOfWeek = this.getSunday();
    lastDayOfWeek.setHours(lastDayOfWeek.getHours() + (offset * 24));
    this.daySeven = lastDayOfWeek;
    // console.log('lastDay', lastDayOfWeek);

    users.forEach(user => {
      tmpUsers.push({...user});
      tmpUsers.find(x => x.id === user.id).activityList =  [];
      user.activityList.forEach(act => {
        // console.log('act', act);
        // console.log('act-time', new Date(act.timestampUtc));
        if (new Date(act.timestampUtc) >= firstDayOfWeek && new Date(act.timestampUtc) <= lastDayOfWeek) {
          tmpUsers.find(x => x.id === user.id).activityList.push(act);
        }
      });
    });

    tmpUsers.forEach(user => {
      const topUser: TopUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        total: 0
      };
      user.activityList.forEach(a => {
        topUser.total = topUser.total + (a.amount * activityList.find(x => x.id === a.activityId).value);
      });
      topUsers.push(topUser);
    });
    topUsers.sort(this.compare);

    const returnTopUsers: TopUser[] = [];

    topUsers.forEach(tu => {
      if (returnTopUsers.length < 5 && tu.total > 0) {
        returnTopUsers.push(tu);
      }
    });

    return returnTopUsers;
  }

  compare(a: TopUser, b: TopUser) {
    if (a.total < b.total) {
      return 1;
    }
    if (b.total < a.total) {
      return -1;
    }
    return 0;
  }

  getMonday(): Date {
    const tmp = new Date();
    const d = new Date(tmp.getFullYear().toString() + '-' + (tmp.getMonth() + 1).toString() + '-' + tmp.getDate().toString());
    d.setHours(d.getHours() - 17);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  getSunday(): Date {
    const d = this.getMonday();
    return new Date(d.setHours(d.getHours() + (24 * 6)));
  }

  setupChart() {
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      }
    };

    this.barChartLabels = this.formatLabels();
  }

  setData(data: TopUser[]) {
    const clone = JSON.parse(JSON.stringify(this.formatData(data))) as BarData[];
    this.barChartData = clone;
    setTimeout(() => {
      this.barChartLabels = this.formatLabels();
    }, 50);
    this.done = true;
  }

  formatData(players: TopUser[]): BarData[] {
    const data: BarData[] = [];
    data.push({ data: [], label: 'Total Points'});
    players.forEach(player => {
      data[0].data.push(player.total);
    });
    return data;
  }

  formatLabels() {
    const labels = this.topUsers.map(function(v) {
      const name = v.firstName + ' ' + v.lastName;
      return name;
    });
    return JSON.parse(JSON.stringify(labels));
  }

  updateWeek(request: string) {
    switch (request) {
      case 'next':
        this.dayOffset = this.dayOffset + 7;
        this.updateData();
        break;
      case 'prev':
        this.dayOffset = this.dayOffset - 7;
        this.updateData();
        break;
      default:
        break;
    }
  }

  updateData() {
    const topFive = this.getTopFiveInThisWeek(this.users, this.activityList, this.dayOffset);
    this.topUsers = topFive;
    if (this.users.length > 0) {
      this.setupChart();
      this.setData(topFive);
    }
  }

}

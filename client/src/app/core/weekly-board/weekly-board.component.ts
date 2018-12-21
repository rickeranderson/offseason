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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getWeeklyTopUsers();
  }

  ngOnDestroy() {
    this.topUsers$.unsubscribe();
  }

  getWeeklyTopUsers() {
    this.topUsers$ = this.store.select(x => x.users).subscribe(val => {
      this.store.select(x => x.activityList).subscribe(activityList => {
        if (val && activityList && val.length > 0 && activityList.length > 0) {
          const topFive = this.getTopFiveInThisWeek(val, activityList);
          this.topUsers = topFive;
          if (val.length > 0) {
            this.setupChart();
            this.setData(topFive);
          }
        }
      });
    });
  }

  getTopFiveInThisWeek(users: User[], activityList: ActivityDefinition[]): TopUser[] {
    const topUsers: TopUser[] = [];
    const tmpUsers: User[] = [];

    const firstDayOfWeek = this.getMonday();
    this.dayOne = firstDayOfWeek;

    const lastDayOfWeek = this.getSunday();
    this.daySeven = lastDayOfWeek;

    users.forEach(user => {
      tmpUsers.push({...user});
      tmpUsers.find(x => x.id === user.id).activityList =  [];
      user.activityList.forEach(act => {
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
    d.setHours(d.getHours() - 10);
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

}

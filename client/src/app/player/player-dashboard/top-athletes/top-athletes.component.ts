import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { TopUser } from 'src/app/core/models/activity.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { BarData } from 'src/app/admin/admin-landing/all-players-graph/all-players-graph.component';

@Component({
  selector: 'app-top-athletes',
  templateUrl: './top-athletes.component.html',
  styleUrls: ['./top-athletes.component.scss']
})
export class TopAthletesComponent implements OnInit, OnDestroy {

  topUsers: TopUser[] = [];
  topUsers$: Subscription;

  done = false;

  barChartOptions: any;
  barChartLabels: string[];
  barChartData: any[];
  barChartType = 'bar';
  barChartLegend = true;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getTopUsers();
  }

  ngOnDestroy() {
    this.topUsers$.unsubscribe();
  }

  getTopUsers() {
    this.topUsers$ = this.store.select(x => x.topUsers).subscribe(val => {
      this.topUsers = val;
      if (val.length > 0) {
        this.setupChart();
        this.setData(val);
      }
    });
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

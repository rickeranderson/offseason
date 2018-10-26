import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivityDefinition } from '../../../core/models/activity.model';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-all-players-graph',
  templateUrl: './all-players-graph.component.html',
  styleUrls: ['./all-players-graph.component.scss']
})
export class AllPlayersGraphComponent implements OnInit, OnChanges {
  @Input() players: User[];
  @Input() activityList: ActivityDefinition[];
  done = false;

  barChartOptions: any;
  barChartLabels: string[];
  barChartData: any[];
  barChartType = 'bar';
  barChartLegend = true;

  constructor() { }

  ngOnInit() {
    this.setData();
  }

  ngOnChanges() {
    this.done = false;
    this.setData();
  }

  setData() {
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

    this.barChartLabels = JSON.parse(JSON.stringify(this.getAthleteList()));


    this.barChartData = this.formatData(this.players);

    this.done = true;
  }

  calculatePlayerTotal(player: User) {
    let total = 0;
    player.activityList.forEach(a => {
      total = total + a.amount * this.activityList.find(x => x.id === a.activityId).value;
    });
    return total;
  }

  formatData(players: User[]): BarData[] {
    const data: BarData[] = [];
    data.push({ data: [], label: 'Total Points'});

    players.forEach(player => {
      data[0].data.push(this.calculatePlayerTotal(player));
    });

    return data;
  }

  getAthleteList() {
    const list = this.players.map(function(v) {
      return v.firstName + ' ' + v.lastName;
    });
    return list;
  }
}

export interface BarData {
  data: number[];
  label: string;
}

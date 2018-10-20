import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Activity, ActivityDefinition } from '../../../core/models/activity.model';
import { User } from '../../../core/models/user.model';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetUsers } from '../../../store/user-store/user.actions';
import { DurationList } from '../../../core/data/time-list';

@Component({
  selector: 'app-player-activity-table',
  templateUrl: './player-activity-table.component.html',
  styleUrls: ['./player-activity-table.component.scss']
})
export class PlayerActivityTableComponent implements OnInit, OnChanges {
  @Input() userId: string;
  @Input() activityList: ActivityDefinition[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Activity>;
  displayedColumns: string[] = ['description', 'amount', 'totalPoints', 'timestampUtc', 'actions'];

  user: User;
  user$: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getUser();
  }

  ngOnChanges() {
    if (this.user) {
      this.dataSource = new MatTableDataSource(this.user.activityList);
    }
  }

  getUser() {
    this.user$ = this.store.select(x => x.users).subscribe(val => {
      this.user = val.find(x => x.id === this.userId);
      if (this.user) {
        this.dataSource = new MatTableDataSource(this.user.activityList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  getActivityDescription(id: number): string {
    return this.activityList.find(x => x.id === id).description;
  }

  getDurationDescription(amount: number): string {
    return DurationList.find(x => x.value === amount).description;
  }

  calculatePoints(activity: Activity): number {
    return activity.amount * this.activityList.find(x => x.id === activity.activityId).value;
  }

  addActivity() {
    console.log('todo');
  }

}

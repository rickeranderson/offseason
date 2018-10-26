import { Component, OnInit, OnDestroy, AfterContentInit, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Activity, ActivityDefinition } from 'src/app/core/models/activity.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { GetUsers } from '../../store/user-store/user.actions';
import { GetActivityList } from '../../store/activity-store/activity.actions';
import { Subscription } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit, OnDestroy {
  @ViewChild('tabGroup') tabGroup;

  players: User[];
  players$: Subscription;
  activityList: ActivityDefinition[];
  activityList$: Subscription;

  selectedTabIndex = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getPlayers();
    this.getAllActivityList();
  }

  ngOnDestroy() {
    this.players$.unsubscribe();
    this.activityList$.unsubscribe();
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
    this.selectedTabIndex = tabChangeEvent.index;
  }

  getPlayers() {
    this.store.dispatch(new GetUsers());
    this.players$ = this.store.select(x => x.users).subscribe(val => {
      this.players = val;
    });
  }

  getAllActivityList() {
    this.store.dispatch(new GetActivityList());
    this.activityList$ = this.store.select(x => x.activityList).subscribe(val => {
      this.activityList = val;
    });
  }

  calculatePlayerTotal(player: User) {
    let total = 0;
    player.activityList.forEach(a => {
      total = total + a.amount * this.activityList.find(x => x.id === a.activityId).value;
    });
    return total;
  }

  activityDescription(activity: Activity): string {
    const act = this.activityList.find(x => x.id === activity.activityId).description;
    return act;
  }

  activityPoints(activity: Activity): number {
    return activity.amount * this.activityList.find(x => x.id === activity.activityId).value;
  }

}

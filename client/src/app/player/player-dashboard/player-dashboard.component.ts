import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetUsers } from '../../store/user-store/user.actions';
import { GetActivityList } from '../../store/activity-store/activity.actions';
import { ActivityDefinition } from '../../core/models/activity.model';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss']
})
export class PlayerDashboardComponent implements OnInit, OnDestroy {

  user: User;
  user$: Subscription;

  activityList: ActivityDefinition[];
  activityList$: Subscription;

  userId: string;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.store.dispatch(new GetUsers());
    this.store.dispatch(new GetActivityList());
    this.user$ = this.store.select(x => x.users).subscribe(val => {
      this.user = val.find(x => x.id === this.userId);
    });
    this.activityList$ = this.store.select(x => x.activityList).subscribe(val => {
      this.activityList = val;
    });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
    this.activityList$.unsubscribe();
  }

}

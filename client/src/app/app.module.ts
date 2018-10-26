import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user-store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user-store/user.effects';
import { activityReducer } from './store/activity-store/activity.reducer';
import { ActivityEffects } from './store/activity-store/activity.effects';
import { topUsersReducer } from './store/top-users-store/top-users.reducer';
import { TopUsersEffects } from './store/top-users-store/top-users.effects';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    EffectsModule.forRoot([UserEffects, ActivityEffects, TopUsersEffects]),
    StoreModule.forRoot(
      {
        users: userReducer,
        activityList: activityReducer,
        topUsers: topUsersReducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

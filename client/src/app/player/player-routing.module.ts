import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerLandingComponent,
  },
  {
    path: ':userId',
    component: PlayerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }

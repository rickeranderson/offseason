import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { PlayerRoutingModule } from './player-routing.module';
import { CoreModule } from '../core/core.module';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { PlayerActivityTableComponent } from './player-dashboard/player-activity-table/player-activity-table.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    CoreModule
  ],
  declarations: [PlayerLandingComponent, PlayerDashboardComponent, PlayerActivityTableComponent]
})
export class PlayerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { PlayerRoutingModule } from './player-routing.module';
import { CoreModule } from '../core/core.module';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { PlayerActivityTableComponent } from './player-dashboard/player-activity-table/player-activity-table.component';
import { DeleteDialogComponent } from '../core/shared/delete-dialog/delete-dialog.component';
// tslint:disable-next-line:max-line-length
import { CreateEditActivityDialogComponent } from './player-dashboard/player-activity-table/create-edit-activity-dialog/create-edit-activity-dialog.component';
import { TopAthletesComponent } from './player-dashboard/top-athletes/top-athletes.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    CoreModule
  ],
  declarations: [
    PlayerLandingComponent,
    PlayerDashboardComponent,
    PlayerActivityTableComponent,
    CreateEditActivityDialogComponent,
    TopAthletesComponent
  ],
  entryComponents: [DeleteDialogComponent, CreateEditActivityDialogComponent]
})
export class PlayerModule { }

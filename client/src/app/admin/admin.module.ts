import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from './admin.guard';
import { CoreModule } from '../core/core.module';
import { AllPlayersGraphComponent } from './admin-landing/all-players-graph/all-players-graph.component';
import { ManagePlayersComponent } from './admin-landing/manage-players/manage-players.component';
import { CreateEditDialogComponent } from './admin-landing/manage-players/create-edit-dialog/create-edit-dialog.component';
import { DeleteDialogComponent } from '../core/shared/delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ],
  declarations: [AdminLandingComponent, AllPlayersGraphComponent, ManagePlayersComponent, CreateEditDialogComponent],
  providers: [AdminGuard],
  entryComponents: [CreateEditDialogComponent, DeleteDialogComponent]
})
export class AdminModule { }

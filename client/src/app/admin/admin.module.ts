import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from './admin.guard';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ],
  declarations: [AdminLandingComponent],
  providers: [AdminGuard]
})
export class AdminModule { }

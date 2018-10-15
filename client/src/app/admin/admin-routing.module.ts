import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminGuard } from './admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingComponent,
    // canActivate: [AdminGuard]
  },
  {
    path: ':userId',
    component: AdminDashboardComponent,
    // canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

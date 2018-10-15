import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectContainerComponent
  },
  {
    path: ':projectId',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

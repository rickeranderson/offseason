import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CoreModule } from '../core/core.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CoreModule
  ],
  declarations: [ProjectContainerComponent, ProjectCardComponent, ProjectDetailComponent]
})
export class ProjectsModule { }

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project-service.service';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {
  projects: Project[];
  cols = 3;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectService.getProjects();
  }

  goToProject(id: number) {
    this.router.navigateByUrl('projects/' + id);
  }

}

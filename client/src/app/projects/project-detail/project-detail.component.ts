import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project-service.service';
import { Location, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: number;
  project: Project;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.getUrlParams();
  }

  getUrlParams() {
    this.route.paramMap.subscribe(params => {
      this.projectId = parseInt(params.get('projectId'), 10);
      this.project = this.projectService.getProjectById(this.projectId);
    });
  }

  back() {
    this.location.back();
  }

  goToUrl(url: string) {
    this.router.navigate(['/externalRedirect', { externalUrl: url }], {
      skipLocationChange: true,
    });
  }

}

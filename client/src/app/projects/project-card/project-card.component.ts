import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  truncateDescription(description: string) {
    if (description.length > 150) {
      return description.slice(0, 150) + '... ';
    } else {
      return description;
    }
  }

}

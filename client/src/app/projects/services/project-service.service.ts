import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Projects as projects} from '../../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects() {
    return projects;
  }

  getProjectById(idx: number): Project {
    return projects.find(x => x.id === idx);
  }
}

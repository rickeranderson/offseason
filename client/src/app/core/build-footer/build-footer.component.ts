import { Component, OnInit } from '@angular/core';
import { environment as env} from '../../../environments/environment';

@Component({
  selector: 'app-build-footer',
  templateUrl: './build-footer.component.html',
  styleUrls: ['./build-footer.component.scss']
})
export class BuildFooterComponent implements OnInit {
  version: string = env.appVersion;
  date: string = env.lastBuild;

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  apiBaseUrl: string = env.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getActivityList() {
    return this.http.get(this.apiBaseUrl + 'activity/list');
  }

  getTopPlayers() {
    return this.http.get(this.apiBaseUrl + 'user/list/top');
  }
}

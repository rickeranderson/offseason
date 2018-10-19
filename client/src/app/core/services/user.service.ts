import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from './login.service';
import { UserData as UserData} from '../data/users';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  userData: UserData;
  apiBaseUrl: string = env.apiBaseUrl;

  constructor(private loginService: LoginService, private http: HttpClient) {
    this.userData = new UserData();
  }

  selectUser(user: User) {
    this.currentUser = user;
  }

  getPlayerList(): Observable<User[]> {
    return this.http.get(this.apiBaseUrl + 'user/player') as Observable<User[]>;
  }

  getPlayerById(id: string) {
    return this.http.get(this.apiBaseUrl + 'user/player/' + id);
  }
}

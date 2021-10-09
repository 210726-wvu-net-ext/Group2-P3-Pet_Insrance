
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginRequest } from '../account/loginRequest';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../account/user';




@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly APIUrl = environment.dbURL;

  constructor(private https: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.https.get<User[]>(this.APIUrl + '/Users/2');
  }
  registerUser(user: User): Observable<User> {
    console.log("registerUser", user);
    return this.https.post<User>(this.APIUrl + '/Users/Register', user);
  }





  logInUser(loginRequest: LoginRequest): Observable<User> {
    console.log(this.APIUrl + '/Users/Login');
    console.log(loginRequest);
    return this.https.post<User>(this.APIUrl + '/Users/Login', loginRequest);

  }
}
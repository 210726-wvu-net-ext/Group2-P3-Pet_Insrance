import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogInRequest } from './account/account.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './account/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly APIUrl=environment.dbURL;

  constructor(private https:HttpClient) { }



  LoginUser(logInRequest : LogInRequest):Observable<User>{
    return this.https.post<User>(this.APIUrl+'User/Login', logInRequest)
  }




}

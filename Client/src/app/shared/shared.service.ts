
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginRequest } from '../account/loginRequest';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../account/user';
import { Pet } from '../pet/pet';



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
  addPet(pet: Pet): Observable<Pet[]> {
    console.log(pet);
    return this.https.post<Pet[]>(this.APIUrl + '/Pets', pet);
  }
  getPets(user: User): Observable<Pet[]> {
    return this.https.get<Pet[]>(this.APIUrl + `/Pets/${user.id}`);
  }
  logInUser(loginRequest: LoginRequest): Observable<User> {
    return this.https.post<User>(this.APIUrl + '/Users/Login', loginRequest);
  }
}
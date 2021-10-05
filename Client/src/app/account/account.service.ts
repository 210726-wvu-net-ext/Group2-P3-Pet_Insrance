import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SharedService } from '../shared.service';
import { User } from './User';




@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable().pipe();

  constructor(private sharedService: SharedService) {
  }

  init(): void {
    const serializedUser: string | null = localStorage.getItem('user');
    if (serializedUser) {
      const localUser: User = JSON.parse(serializedUser)
      this.userSubject.next(localUser);
    }
  }


  logIn(userName: string, email: string, pass: string) {
    this.sharedService.logInUser({
      userName,
      email,
      pass
    }).subscribe((user: User | null) => {
      console.log(user);
      this.userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user))
    });
  }
  
  // Log out method
  logOut() {
    this.userSubject.next(null);
    localStorage.clear();
  }
}

export interface LogInRequest {
  email: string;
  userName: string;
  pass: string;
}
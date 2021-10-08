import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { LoginRequest } from './loginRequest';
import { User } from './user';




@Injectable({
  providedIn: 'root'
})
export class AccountService {


  showUsers() {
    this.sharedService.getUsers();
  }

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable().pipe(shareReplay());

  constructor(private sharedService: SharedService) {
  }

  init(): void {
    const serializedUser: string | null = localStorage.getItem('user');
    if (serializedUser) {
      const localUser: User = JSON.parse(serializedUser)
      this.userSubject.next(localUser);
    }
  }
  loginUser(user: LoginRequest)
  {
    console.log(user);
    this.sharedService.logInUser(user);
  }


  logIn(user: LoginRequest) {
    this.sharedService.logInUser(user).subscribe((user: User | null) => {
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
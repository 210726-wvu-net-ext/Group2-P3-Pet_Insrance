import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  user$: Observable<User | null> = this.userSubject.asObservable().pipe(shareReplay(1));

  constructor(private sharedService: SharedService, private https: HttpClient, private router: Router) {
    debugger;
  }

  init(): void {
    const serializedUser: string | null = localStorage.getItem('user');
    if (serializedUser) {
      const localUser: User = JSON.parse(serializedUser)
      this.userSubject.next(localUser);
      // this.user$.subscribe(p => {
      //   console.log("inside init", p?.id);
      //results in 2
      // })
    }
  }
  // loginUser(user: LoginRequest)
  // {
  //   console.log(user);
  //   this.sharedService.logInUser(user);
  // }


  logIn(user: LoginRequest) {
    this.sharedService.logInUser(user).subscribe((user: User | null) => {
      this.userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user))
      return user;
    });
  }
  register(user: User) {
    console.log("register", user);
    return this.sharedService.registerUser(user);
  }
  // Log out method
  logOut() {
    this.userSubject.next(null);
    localStorage.clear();
  }
}
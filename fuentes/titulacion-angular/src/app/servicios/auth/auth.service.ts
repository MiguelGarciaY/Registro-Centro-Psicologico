import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$: Observable<boolean>;

  constructor() { 
    this.isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return token !== null && token !== undefined;
  }
}

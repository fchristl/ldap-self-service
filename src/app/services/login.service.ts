import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {catchError, flatMap, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token$ = new BehaviorSubject<string>(null);
  loggedIn$ = new BehaviorSubject<boolean>(false);
  loggedOut$ = new Subject();

  constructor(private http: HttpClient,
              private config: ConfigService,
              private snackBar: MatSnackBar) {
    if (localStorage.jwt) {
      this.token$.next(localStorage.jwt);
      this.loggedIn$.next(true);
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return this.config.endpoint$.pipe(
      flatMap(endpoint => this.http.post(`${endpoint}/login`, {username, password})),
      catchError(() => {
        this.snackBar.open('Error logging in')._dismissAfter(1000);
        return of();
      }),
      map(jwt => {
        if (jwt == null) {
          return false;
        }
        localStorage.jwt = jwt['token'];
        this.token$.next(jwt['token']);
        this.loggedIn$.next(true);
        return true;
      })
    );
  }

  logout() {
    localStorage.jwt = '';
    this.token$.next(null);
    this.loggedIn$.next(false);
    setTimeout(() => this.loggedOut$.next());
  }
}

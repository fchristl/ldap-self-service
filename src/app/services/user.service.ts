import { Injectable } from '@angular/core';
import {HttpAuthenticationService} from './http-authentication.service';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';
import {MatSnackBar} from '@angular/material';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpAuthenticationService,
              private config: ConfigService) { }

  getUser(): Observable<any> {
    return this.config.endpoint$.pipe(
      flatMap(endpoint => this.http.get(`${endpoint}/user`))
    );
  }

  saveUser(user: any) {
    return this.config.endpoint$.pipe(
      flatMap(endpoint => this.http.put(`${endpoint}/user`, user))
    );
  }
}

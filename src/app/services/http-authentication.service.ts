import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {catchError, flatMap, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthenticationService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  private addAuthenticationToHeaders(headers: HttpHeaders): Observable<HttpHeaders> {
    return this.loginService.token$.pipe(
      map(token => headers.append('Authorization', token))
    );
  }

  get(url: string): Observable<any> {
    return this.addAuthenticationToHeaders(new HttpHeaders())
      .pipe(
        flatMap(headers => this.http.get(url, {headers})),
        catchError(() => {
          this.loginService.logout();
          return this.loginService.loggedOut$;
        })
      );
  }

  put(url: string, object: any): Observable<any> {
    return this.addAuthenticationToHeaders(new HttpHeaders())
      .pipe(
        flatMap(headers => this.http.put(url, object, {headers}))
      );
  }
}

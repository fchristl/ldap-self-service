import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService  {

  endpoint$ = new BehaviorSubject('http://localhost:3000');
  editableFields$ = new BehaviorSubject(['sn', 'givenName', 'mobile']);

  constructor(private http: HttpClient) {
    this.http.get('./assets/config.json')
      .subscribe((result: any) => {
        this.endpoint$.next(result.endpoint);
        this.editableFields$.next(result.editableFields);
      });
  }

}

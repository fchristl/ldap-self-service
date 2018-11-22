import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.loginService.token$.subscribe(token => {
      if (token != null) {
        this.router.navigate(['/user']);
      }
    });
  }

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe();
  }

}

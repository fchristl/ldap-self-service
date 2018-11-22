import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;

  constructor(private loginService: LoginService,
              private router: Router) {

  }

  ngOnInit() {
    this.loginService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.loginService.loggedOut$.subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.loginService.logout();
  }
}

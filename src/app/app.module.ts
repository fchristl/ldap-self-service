import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import {LoggedInGuard} from './guards/logged-in-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [LoggedInGuard]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

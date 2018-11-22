import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ConfigService} from '../../services/config.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};
  editableFields: string[];

  constructor(private userService: UserService,
              private configService: ConfigService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user, () => this.user = {});
    this.configService.editableFields$.subscribe(editableFields => this.editableFields = editableFields);
  }


  save() {
    this.userService.saveUser(this.user).subscribe(() => {
      this.snackBar.open('Saved')._dismissAfter(1000);
    }, () => {
      this.snackBar.open('Error saving')._dismissAfter(1000);
    });
  }

}

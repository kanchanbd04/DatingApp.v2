import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dating app';
  users: any;
  userJson: any  = localStorage.getItem('user');

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }


  setCurrentUser(){
    const user: any = JSON.parse(this.userJson);
    this.accountService.setCurrentUser(user);
  }

}

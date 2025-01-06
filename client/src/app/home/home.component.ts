import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users : any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void { 
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get('https://localhost:7149/api/users').subscribe(users => this.users = users);
  }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}

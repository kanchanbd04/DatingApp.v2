import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  
  model: any = {}
  loggedIn: boolean = false;
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next : (response) => {
      console.log(response);
      }, 
      error: (error: any) => {
      console.log(error);
      }
    });
  }

  logout(){
    this.accountService.logout();
  }

}

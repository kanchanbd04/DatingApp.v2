import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model : any = {};
  
  constructor(private accountService : AccountService) {}

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    },error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}

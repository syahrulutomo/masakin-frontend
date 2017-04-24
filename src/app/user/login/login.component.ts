import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { User } from './../user.model';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail: string;
  loginPassword: string;


  constructor(private router : Router,private userService : UserService) {
  }

  ngOnInit() {
  }

  login():void{
      this.userService.login(this.loginEmail,this.loginPassword)
      .then(()=>{this.router.navigate(['user/view']);
      localStorage.setItem("userEmail",JSON.stringify(this.loginEmail));
      localStorage.setItem("userPassword",JSON.stringify(this.loginPassword))})
  }


private handleError(errors: any): void {
    console.log("Terjadi error : "+errors);
}


}

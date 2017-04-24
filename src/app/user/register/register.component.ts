import { Component, OnInit } from '@angular/core';

import { Router }   from '@angular/router';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

user = new User("","","","",undefined,"","");

  constructor(private router : Router,private userService : UserService) {
  }

  ngOnInit() {
  }

  lakukanRegister():void{
    this.userService.tambahUser(this.user)
    .then(()=>{ this.router.navigate(['user/login']); })
    .catch(error => console.log("Error : "+error));

    }

    get debugForm(){
      return JSON.stringify(this.user);
    }




}

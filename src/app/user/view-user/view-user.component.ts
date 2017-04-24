import { Component, OnInit,NgModule } from '@angular/core';

import { Router }   from '@angular/router';

import { User } from '../user.model';
import { UserService } from './../user.service';
import { AuthService } from './../../auth.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

user = new User("","","","",undefined,"","");

  constructor(private authService: AuthService,private router : Router,private userService: UserService) {

    this.userService.login(authService.getUserEmail(),authService.getUserPassword())
    .then(hasil => this.user = hasil)
    .catch(this.handleError);
  }
  ngOnInit() {

  }

  lakukanUbah():void{
    this.userService.ubahUser(this.user,this.user.id)
    .then(()=>{ this.router.navigate(['user/view']); })
    .catch(error => console.log("Error : "+error));
  }

  private handleError(errors: any): void {
      console.log("Terjadi error : "+errors);
  }

  get debugForm(){
    return JSON.stringify(this.user);
  }



}

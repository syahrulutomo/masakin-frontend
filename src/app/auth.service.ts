import { Injectable } from '@angular/core';

import { Router }   from '@angular/router';

import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {

  constructor() { }

  sudahLogin(): boolean{
     return localStorage.getItem("userEmail") != null && localStorage.getItem("userPassword") != null;
     }

  // login(email: string, loginPassword:string):Promise<User>{
      // if("endy" == username && "123" == password)
      // {
      //     let userInfo = {
      //       fullName : "Endy Muhardin",
      //       username : "Endy"
      //     };
      //     localStorage.setItem("userInfo",JSON.stringify(userInfo));
      //     localStorage.setItem("token","andjagd1234");
      //
      //     return true;
      // }
      // return false;
  // }

  logout():void{
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("menu-id");
    localStorage.removeItem("id-order");
    localStorage.removeItem("idUser");

  }

  getUserEmail(){
    return JSON.parse(localStorage.getItem("userEmail"));
  }

  getUserPassword(){
    return  JSON.parse(localStorage.getItem("userPassword"));
  }

  getMenuId(){
    return  JSON.parse(localStorage.getItem("menu-id"));
  }

  getOrderId(){
    return  JSON.parse(localStorage.getItem("id-order"));
  }

  getIdUser(){
    return  JSON.parse(localStorage.getItem("idUser"));
  }

  sudahLoginRestaurant(): boolean{
     return localStorage.getItem("restaurantInfo") != null
     && localStorage.getItem("token") != null;
  }

  loginRestaurant(restaurantname: string, password:string):boolean{
      if("mao" == restaurantname && "1234" == password)
      {
          let restaurantInfo = {
            fullName : "Mao Susu",
            username : "mao"
          };
          localStorage.setItem("restaurantInfo",JSON.stringify(restaurantInfo));
          localStorage.setItem("token","andjagd1234");

          return true;
      }
      return false;
  }

  logoutRestaurant():void{
    localStorage.removeItem("restaurantInfo");
    localStorage.removeItem("token");
  }

  getRestaurantInfo(){
    return JSON.parse(localStorage.getItem("restaurantInfo"));
  }

  private handleError(errors: any): void {
      console.log("Terjadi error : "+errors);
  }

}

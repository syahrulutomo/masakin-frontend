import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Menu } from '../menu.model';
import { MenuRestaurantService } from './../menu-restaurant.service';

import { Restaurant } from '../restaurant.model';
import { RestaurantService } from './../restaurant.service';

import { Order } from '../../order/order.model';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';
import { OrderService } from '../../order/order.service';

import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-menu-minuman',
  templateUrl: './menu-minuman.component.html',
  styleUrls: ['./menu-minuman.component.css']
})
export class MenuMinumanComponent implements OnInit {

  menu : Menu[];
  user = new User("","","","",undefined,"","");
  order = new Order("",null,null,"",null,0,0,"","");

  constructor(private authService: AuthService,private menuService: MenuRestaurantService,
                private userService: UserService,private orderService: OrderService,private router : Router) {
    this.menuService.getMenuMinuman()
    .then(hasil => this.menu = hasil)
    .catch(this.handleError);

    this.userService.login(authService.getUserEmail(),authService.getUserPassword())
    .then(hasil => this.user = hasil)
    .catch(this.handleError);

    }

    lakukanOrder(idMenu:string,idUser:string):void{
        localStorage.setItem("menu-id",JSON.stringify(idMenu));
        localStorage.setItem("idUser",JSON.stringify(this.user.id));
    }
      ngOnInit() {
      }
      private handleError(errors: any): void {
          console.log("Terjadi error : "+errors);
      }

      get debugForm(){
        return JSON.stringify(this.menu);
      }
}

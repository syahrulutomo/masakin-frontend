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
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  menu : Menu[];
  user = new User("","","","",undefined,"","");
  order = new Order("",null,null,"",null,0,0,"","");
  
    constructor(private authService: AuthService,private menuService: MenuRestaurantService,
                  private userService: UserService,private orderService: OrderService,private router : Router) {
      this.menuService.getDataMenu()
      .then(hasil => this.menu = hasil)
      .catch(this.handleError);

      this.userService.login(authService.getUserEmail(),authService.getUserPassword())
      .then(hasil => this.user = hasil)
      .catch(this.handleError);

    }

      ngOnInit() {
      }
      private handleError(errors: any): void {
          console.log("Terjadi error : "+errors);
      }

      get debugForm(){
        return JSON.stringify(this.menu);
      }

      lakukanOrder(idMenu:string,idUser:string):void{
          localStorage.setItem("menu-id",JSON.stringify(idMenu));
          localStorage.setItem("idUser",JSON.stringify(this.user.id));
      }
}

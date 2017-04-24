import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Menu } from '../../menu-restaurant/menu.model';
import { MenuRestaurantService } from './../../menu-restaurant/menu-restaurant.service';

import { Order } from '../../order/order.model';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';
import { OrderService } from '../../order/order.service';

import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  user = new User("","","","",undefined,"","");
  order :Order[];
  menu:Menu;

  constructor(private authService:AuthService,private menuService:MenuRestaurantService
              ,  private orderService : OrderService,private router:Router) {
    this.orderService.getDataOrder(authService.getIdUser())
    .then(hasil => this.order = hasil)
    .catch(this.handleError);
  }

  ngOnInit() {
  }

  lakukanViewOrder(id:string){
      localStorage.setItem("id-order",JSON.stringify(id));
      this.router.navigate(['order/detail']);

  }


  private handleError(errors: any): void {
      console.log("Terjadi error : "+errors);
  }

}

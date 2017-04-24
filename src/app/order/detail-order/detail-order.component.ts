import { Component, OnInit } from '@angular/core';
import { Menu } from '../../menu-restaurant/menu.model';
import { MenuRestaurantService } from './../../menu-restaurant/menu-restaurant.service';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {

  menu:Menu[];

  constructor(private authService:AuthService,private menuService:MenuRestaurantService) {
      this.menuService.getMenuByPesanan(this.authService.getOrderId())
      .then(hasil=> this.menu = hasil)
      .catch(this.handleError);
      }

      ngOnInit() {
      }

      private handleError(errors: any): void {
        console.log("Terjadi error : "+errors);
      }


}

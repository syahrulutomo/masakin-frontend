import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Restaurant } from '../restaurant.model';
import { RestaurantService } from './../restaurant.service';

@Component({
  selector: 'app-view-restaurant-all',
  templateUrl: './view-restaurant-all.component.html',
  styleUrls: ['./view-restaurant-all.component.css']
})
export class ViewRestaurantAllComponent implements OnInit {

  restaurant : Restaurant[];

    constructor(private restaurantService: RestaurantService) {
      this.restaurantService.getDataRestaurant()
      .then(hasil => this.restaurant = hasil)
      .catch(this.handleError);
    }

      ngOnInit() {
      }
      private handleError(errors: any): void {
          console.log("Terjadi error : "+errors);
      }

      get debugForm(){
        return JSON.stringify(this.restaurant);
      }

}

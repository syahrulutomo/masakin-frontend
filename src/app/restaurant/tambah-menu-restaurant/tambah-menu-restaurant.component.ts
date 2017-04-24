import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-tambah-menu-restaurant',
  templateUrl: './tambah-menu-restaurant.component.html',
  styleUrls: ['./tambah-menu-restaurant.component.css']
})
export class TambahMenuRestaurantComponent implements OnInit {

  restaurant = new Restaurant("","","","","",null,"");

    constructor(private router : Router,private restaurantService : RestaurantService) {
    }

    ngOnInit() {
    }

    lakukanRegisterRestaurant():void{
      this.restaurantService.tambahRestaurant(this.restaurant)
      .then(()=>{ this.router.navigate(['restaurant/menu']); })
      .catch(error => console.log("Error : "+error));

      }

      get debugForm(){
        return JSON.stringify(this.restaurant);
      }

}

import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  ngOnInit() {
  }

  restaurant = new Restaurant("","","","","",null,"");

    constructor(private router : Router,private restaurantService : RestaurantService) {
    }

    lakukanRegisterRestaurant():void{
      this.restaurantService.tambahRestaurant(this.restaurant)
      .then(()=>{ this.router.navigate(['restaurant/login']); })
      .catch(error => console.log("Error : "+error));

      }

      get debugForm(){
        return JSON.stringify(this.restaurant);
      }


}

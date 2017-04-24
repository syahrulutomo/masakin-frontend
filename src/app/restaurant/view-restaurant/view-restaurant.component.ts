import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Restaurant } from '../restaurant.model';
import { RestaurantService } from './../restaurant.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  restaurant = new Restaurant("","","","","",undefined,"");
  id:string = "47105392-54dd-4ffe-8b97-7192342fbee4";

    constructor(private router : Router,private restaurantService: RestaurantService) {
      this.restaurantService.getRestaurantById(this.id)
      .then(hasil => this.restaurant = hasil)
      .catch(this.handleError);
    }
    ngOnInit() {
    }

    lakukanUbah():void{
      this.restaurantService.ubahRestaurant(this.restaurant,this.id)
      .then(()=>{ this.router.navigate(['restaurant/view']); })
      .catch(error => console.log("Error : "+error));
    }

    private handleError(errors: any): void {
        console.log("Terjadi error : "+errors);
    }

    get debugForm(){
      return JSON.stringify(this.restaurant);
    }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Route } from '@angular/router';
import { RestaurantService } from './restaurant.service';

import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { LoginRestaurantComponent } from './login-restaurant/login-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { ViewMenuRestaurantComponent } from './view-menu-restaurant/view-menu-restaurant.component';
import { TambahMenuRestaurantComponent } from './tambah-menu-restaurant/tambah-menu-restaurant.component';
import { ViewOrderRestaurantComponent } from './view-order-restaurant/view-order-restaurant.component';


const routingRestaurant: Route[] = [
    { path : 'restaurant/login',component: LoginRestaurantComponent},
    { path : 'restaurant/register',component: RegisterRestaurantComponent},
    { path : 'restaurant/view',component: ViewRestaurantComponent},
    { path : 'restaurant/menu',component: ViewMenuRestaurantComponent},
    { path : 'restaurant/add',component: TambahMenuRestaurantComponent},
    { path : 'restaurant/vieworder',component: ViewOrderRestaurantComponent},


];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingRestaurant)
  ],
  declarations: [
        RegisterRestaurantComponent,
        LoginRestaurantComponent,
        ViewRestaurantComponent,
        ViewMenuRestaurantComponent,
        TambahMenuRestaurantComponent,
        ViewOrderRestaurantComponent
  ],
  exports: [
      RegisterRestaurantComponent,
      LoginRestaurantComponent
  ],
  providers : [
        RestaurantService
  ]

})

export class RestaurantModule { }

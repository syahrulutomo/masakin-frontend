import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Route } from '@angular/router';

import { MenuRestaurantService } from './menu-restaurant.service';
import { RestaurantService } from './restaurant.service';

import { ViewMenuComponent } from './view-menu/view-menu.component';
import { MenuMakananComponent } from './menu-makanan/menu-makanan.component';
import { MenuMinumanComponent } from './menu-minuman/menu-minuman.component';

import { AuthGuard } from '../auth.guard';
import { ViewRestaurantAllComponent } from './view-restaurant-all/view-restaurant-all.component';
import { MenuOrderComponent } from './menu-order/menu-order.component';


const routingMenu: Route[] = [
    { path : 'menu/view',component: ViewMenuComponent},
    { path : 'menu/makanan',component: MenuMakananComponent},
    { path : 'menu/minuman',component: MenuMinumanComponent},
    { path : 'menu/order',component: MenuOrderComponent},
    { path : 'menu/resto',component: ViewRestaurantAllComponent}

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingMenu)
  ],
  declarations: [
    ViewMenuComponent, MenuMakananComponent, MenuMinumanComponent, ViewRestaurantAllComponent, MenuOrderComponent

  ],
  exports:[

  ],
  providers : [
        MenuRestaurantService,RestaurantService
  ]
})
export class MenuRestaurantModule { }

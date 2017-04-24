import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrderComponent } from './view-order/view-order.component';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Route } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { OrderService } from './order.service';
import { UserModule } from './../user/user.module';
import { MenuRestaurantModule } from './../menu-restaurant/menu-restaurant.module';
import { DetailOrderComponent } from './detail-order/detail-order.component';


const routingOrder: Route[] = [
    { path : 'order/view',component: ViewOrderComponent, canActivate:[AuthGuard]},
    { path : 'order/detail',component: DetailOrderComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingOrder)
  ],
  declarations: [ViewOrderComponent, DetailOrderComponent],
  exports: [

  ],
  providers : [ OrderService ]
})
export class OrderModule { }

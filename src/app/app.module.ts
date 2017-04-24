import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Route } from '@angular/router';

import { AppComponent } from './app.component';

import { RestaurantModule } from './restaurant/restaurant.module';
import { UserModule } from './user/user.module';
import { MenuRestaurantModule } from './menu-restaurant/menu-restaurant.module';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CollapseDirective } from 'ng2-bootstrap';

const routingAplikasi : Route[] = [
  {path:'user', redirectTo:'/user',pathMatch:'full', canActivateChild :[AuthGuard] },
  {path:'menu', redirectTo:'/menu',pathMatch:'full', canActivateChild :[AuthGuard]},
  {path:'restaurant', redirectTo:'/restaurant',pathMatch:'full', canActivateChild :[AuthGuard]},
  {path:'order', redirectTo:'/order',pathMatch:'full', canActivateChild :[AuthGuard]},
  {path:'**', redirectTo:'/home',pathMatch:'full', canActivate :[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,CollapseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routingAplikasi),
    HttpModule,
    UserModule,
    SharedModule,
    RestaurantModule,
    MenuRestaurantModule,
    UserModule,
    OrderModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

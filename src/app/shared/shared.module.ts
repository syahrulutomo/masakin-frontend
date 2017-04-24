import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

const routingHome: Route[] = [
    { path : 'home',component: HomeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingHome)
  ],
  declarations: [
        HomeComponent
  ],
  exports: [

  ],
  providers : [
      AuthService,AuthGuard
  ]

})
export class SharedModule { }

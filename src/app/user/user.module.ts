import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule,Route } from '@angular/router';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserService } from './user.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppModule } from '../app.module';
import { AuthGuard } from '../auth.guard';



const routingUser: Route[] = [
    { path : 'user/view',component: ViewUserComponent, canActivate:[AuthGuard]},
    { path : 'user/login',component: LoginComponent},
    { path : 'user/register',component: RegisterComponent},
    { path : 'user/**',component: UserComponent}

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingUser)

  ],

  declarations: [
            UserComponent,ViewUserComponent, RegisterComponent, LoginComponent
  ],

  exports: [
      RegisterComponent
  ],
  providers : [ UserService ]

})
export class UserModule { }

import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';
import { AuthService }  from'./auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService){}

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return this.auth.sudahLogin();
  }
}

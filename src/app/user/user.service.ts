import { Injectable }    from '@angular/core';

import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService {

  private serverUrl= 'https://masakin-backend.herokuapp.com/user';
  constructor(private httpClient: Http) { }

  login(email:string,password:string):Promise<User>{
    const url = 'https://masakin-backend.herokuapp.com/user/login?email='+email+'&password='+password;
    return this.httpClient.get(url)
    .toPromise()
    .then(hasil => hasil.json() as User)
    .catch(this.handleError);
  }

  getDataUser(): Promise<User[]> {
    return this.httpClient.get(this.serverUrl)
    .toPromise()
    .then(hasil => hasil.json().content as User[])
    .catch(this.handleError);
  }

  getUserById(id: string): Promise<User> {
  const url = 'https://masakin-backend.herokuapp.com/user/'+id;
  return this.httpClient.get(url)
  .toPromise()
  .then(hasil => hasil.json() as User)
  .catch(this.handleError);
  }

  tambahUser( u : User): Promise<void>{
    return this.httpClient.post(this.serverUrl, u)
    .toPromise()
    .then(() => { console.log("sukses menyimpan data"); })
    .catch(this.handleError);
  }

private headers = new Headers({'Content-Type': 'application/json'});

ubahUser(user : User,id:string): Promise<User> {
  const url = 'https://masakin-backend.herokuapp.com/user/'+id;
  return this.httpClient
    .put(url, JSON.stringify(user), {headers: this.headers})
    .toPromise()
    .then(() => user)
    .catch(this.handleError);
}

  private handleError(error: any) : Promise<any> {
      //console.error(error.message || error);
      return Promise.reject(error.message || error);
  }




}

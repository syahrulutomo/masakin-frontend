import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Menu } from './menu.model';

@Injectable()
export class MenuRestaurantService {

  private serverUrl= 'https://masakin-backend.herokuapp.com/menu';
  constructor(private httpClient: Http) { }

  getDataMenu(): Promise<Menu[]> {
    return this.httpClient.get(this.serverUrl)
    .toPromise()
    .then(hasil => hasil.json().content as Menu[])
    .catch(this.handleError);
  }

  getMenuMakanan(): Promise<Menu[]> {
    const url ='https://masakin-backend.herokuapp.com/menu/makanan';
    return this.httpClient.get(url)
    .toPromise()
    .then(hasil => hasil.json().content as Menu[])
    .catch(this.handleError);
  }

  getMenuMinuman(): Promise<Menu[]> {
    const url ='https://masakin-backend.herokuapp.com/menu/minuman';
    return this.httpClient.get(url)
    .toPromise()
    .then(hasil => hasil.json().content as Menu[])
    .catch(this.handleError);
  }

  getMenuByRestaurant(id: string): Promise<Menu> {
  const url = 'https://masakin-backend.herokuapp.com/menu/restaurant'+id;
  return this.httpClient.get(url)
  .toPromise()
  .then(hasil => hasil.json() as Menu)
  .catch(this.handleError);
  }

  getMenuById(id: string): Promise<Menu> {
  const url = 'https://masakin-backend.herokuapp.com/menu/'+id;
  return this.httpClient.get(url)
  .toPromise()
  .then(hasil => hasil.json() as Menu)
  .catch(this.handleError);
  }

  getMenuByPesanan(id: string): Promise<Menu[]> {
  const url = 'api/menu/pesanan'+id;
  return this.httpClient.get(url)
  .toPromise()
  .then(hasil => hasil.json().content as Menu)
  .catch(this.handleError);
  }

  tambahMenu( m : Menu,idRestaurant:string): Promise<void>{
    const url = 'api/menu/restaurant'+idRestaurant;
    return this.httpClient.post(this.serverUrl, m)
    .toPromise()
    .then(() => { console.log("sukses menyimpan data"); })
    .catch(this.handleError);
  }

private headers = new Headers({'Content-Type': 'application/json'});

ubahRestaurant(menu : Menu, id:string): Promise<Menu> {
  const url = 'api/menu/'+id;
  return this.httpClient
    .put(url, JSON.stringify(menu), {headers: this.headers})
    .toPromise()
    .then(() => menu)
    .catch(this.handleError);
}

  private handleError(error: any) : Promise<any> {
      //console.error(error.message || error);
      return Promise.reject(error.message || error);
  }

}

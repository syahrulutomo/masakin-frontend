import { Injectable } from '@angular/core';

import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {

    private serverUrl= 'https://masakin-backend.herokuapp.com/restaurant';
    constructor(private httpClient: Http) { }

    getDataRestaurant(): Promise<Restaurant[]> {
      return this.httpClient.get(this.serverUrl)
      .toPromise()
      .then(hasil => hasil.json().content as Restaurant[])
      .catch(this.handleError);
    }

    getRestaurantById(id: string): Promise<Restaurant> {
    const url = 'https://masakin-backend.herokuapp.com/restaurant/'+id;
    return this.httpClient.get(url)
    .toPromise()
    .then(hasil => hasil.json() as Restaurant)
    .catch(this.handleError);
    }

    tambahRestaurant( r : Restaurant): Promise<void>{
      return this.httpClient.post(this.serverUrl, r)
      .toPromise()
      .then(() => { console.log("sukses menyimpan data"); })
      .catch(this.handleError);
    }

  private headers = new Headers({'Content-Type': 'application/json'});

  ubahRestaurant(restaurant : Restaurant, id:string): Promise<Restaurant> {
    const url = 'https://masakin-backend.herokuapp.com/restaurant/'+id;
    return this.httpClient
      .put(url, JSON.stringify(restaurant), {headers: this.headers})
      .toPromise()
      .then(() => restaurant)
      .catch(this.handleError);
  }

    private handleError(error: any) : Promise<any> {
        //console.error(error.message || error);
        return Promise.reject(error.message || error);
    }


}

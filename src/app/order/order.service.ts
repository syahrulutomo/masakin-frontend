import { Injectable } from '@angular/core';

import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from './order.model';

@Injectable()
export class OrderService {

  constructor(private httpClient: Http) { }

  getDataOrder(id:string): Promise<Order[]> {
    const url = 'https://masakin-backend.herokuapp.com/pesanan/user'+id;
    return this.httpClient.get(url)
    .toPromise()
    .then(hasil => hasil.json().content as Order[])
    .catch(this.handleError);
  }

  tambahOrder( idUser:string,idMenu:string,o:Order): Promise<void>{
    const url = 'https://masakin-backend.herokuapp.com/pesanan/user'+idUser+'/menu'+idMenu;
    return this.httpClient.post(url,o)
    .toPromise()
    .then(() => { console.log("sukses menyimpan data"); })
    .catch(this.handleError);
  }



private handleError(error: any) : Promise<any> {
    //console.error(error.message || error);
    return Promise.reject(error.message || error);
}

}

import { Menu } from '../menu-restaurant/menu.model';

import { User } from '../user/user.model';

export class Order{

  constructor(
        public id:string,
        public user:User,
        public menu:Menu,
        public alamat: string,
        public tglPesan: Date,
        public jumlahPesan: number,
        public totalBayar: number,
        public statusBayar: string,
        public statusDelivery: string,){

   }
}

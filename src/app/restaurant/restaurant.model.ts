export class Restaurant{

  constructor(
        public id: string,
        public namaRestaurant: string,
        public password: string,
        public alamat: string,
        public email: string,
        public daftarMenu: Array<Text>,
        public nomorRekeningBank: string){

   }
}

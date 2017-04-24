import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {

  restaurantname: string;
  password: string;

  constructor(private router : Router,private auth : AuthService) { }

  ngOnInit() {
  }

  loginRestaurant(){
      console.log("restaurantName : "+this.restaurantname  );
      console.log("Password : "+this.password  );

      if(this.auth.loginRestaurant(this.restaurantname,this.password)){
          console.log("Login sukses");
            this.router.navigate(['/']);
      }else{
        console.log("Login gagal");
      }
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from '../model/CustomerLogin';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  customer: CustomerLogin = new CustomerLogin();
  @Input()
  user:any="";

  @Input()
  greet:any="";
  
  constructor(private router:Router){}

  @Input()
  isLoggedIn:String;

  @Input()
  isAdmin:String;

  name:any;


  ngOnInit() {
    this.name=localStorage.getItem("auth-user")?.toString().split("@")[0];
  }

  onLogout(){
    localStorage.removeItem("Customer-Token");
    localStorage.removeItem("auth-user");
    localStorage.removeItem("user-type");
    this.router.navigateByUrl("/login-signup");
    
  }

  isLoggedin:String="false";

  

  login() {
    if (localStorage.getItem("Customer-Token")){
      this.isLoggedin = "true";
      this.user=localStorage.getItem("auth-user");

      var today = new Date()
      var curHr = today.getHours()
  
      if (curHr < 12) {
        this.greet="Good morning,";
      } else if (curHr < 17) {
        this.greet="Good afternoon,";
      } else {
        this.greet="Good evening,";
      }
    }
    else{
      this.isLoggedin = "false";
      this.greet="";
      this.user="";
    }

}


}

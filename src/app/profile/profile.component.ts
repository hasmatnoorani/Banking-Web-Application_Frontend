import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerLogin } from '../model/CustomerLogin';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:CustomerloginService){}

  customer:CustomerLogin=new CustomerLogin();

  ngOnInit() {
    this.getCustomerDetail();
  }


  isLoggedin:String="false";
  user:any="";
  greet:any="";
  

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

getCustomerDetail(){
  this.service.getUserDetail().subscribe(
    (resp:any)=>{
     this.customer=resp;
     console.log(resp);
    }
  )
}
}

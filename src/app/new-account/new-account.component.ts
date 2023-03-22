import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerBankAccount } from '../model/CustomerBankAccount';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  customerBankAccount:CustomerBankAccount=new CustomerBankAccount(); 

  constructor(private customerloginservice:CustomerloginService){}

  ngOnInit(): void {
  }

  addBankAccount(data:NgForm){
    console.log(data.value);
    this.customerloginservice.doAddCustomerBankAccount(data.value).subscribe(
      (resp)=>{
        console.log(resp);
      }
    )
  }



// Navigation Bar

  isLoggedin:String="false";
  user:any="";
  greet:any="";
  
  

  login() {
    if (localStorage.getItem("Token")){
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

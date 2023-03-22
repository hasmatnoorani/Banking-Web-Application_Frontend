import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerBankAccount } from '../model/CustomerBankAccount';

@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent implements OnInit {
  
  customerAccount:CustomerBankAccount=new CustomerBankAccount();

  ngOnInit(){
    this.getCustomerBankAccount();
  } 


constructor(private service:CustomerloginService){}

  isLoggedin:String="false";
  user:any="";
  greet:any="";
  
  getCustomerBankAccount(){
    this.service.getBankAccount().subscribe(
      (resp:any)=>{
        this.customerAccount = resp;
      }
    )
  }

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

import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerTransactions } from '../model/CustomerTransactions';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit{

  constructor(private service:CustomerloginService){}

  ngOnInit(){
  
  }
  isLoggedin:String="false";
  user:any="";
  greet:any="";

  customerTransaction:CustomerTransactions=new CustomerTransactions();

  initiateTransaction(){
    this.service.doInitiateTransaction(this.customerTransaction).subscribe(
      resp=>{
        console.log(resp);
    if(resp=="Transaction Successful!"){
         alert("Transaction Successful.");
         location.reload();
       } else{
       alert("Transaction Failed!");
       location.reload();
     }
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

import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerTransactions } from '../model/CustomerTransactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  startDate:Date;
  endDate:Date;
  acNo:String;

  constructor(private service:CustomerloginService){}

  ngOnInit(){
    this.getAccountNumberById();
  }
  


  isLoggedin:String="false";
  user:any="";
  greet:any="";
  customerTransaction:CustomerTransactions[];
  customerTransaction1:CustomerTransactions[];

  

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

getAccountNumberById(){
  this.service.getBankAccount().subscribe(
    (res:any)=>{
    this.acNo=res["customerBankAccountNumber"];
   }
  );
}
 


    getCustomerDebitTransactions(){
      this.getCustomerCreditTransactions()
        this.service.doGetDebitedCustomerTransactions(this.startDate,this.endDate).subscribe(
          (resp:any)=>{
            this.customerTransaction1 =resp;
            console.log(resp);

          }
        )
    }

    getCustomerCreditTransactions(){
      this.service.doGetCreditedCustomerTransactions(this.acNo,this.startDate,this.endDate).subscribe(
        (resp:any)=>{
          this.customerTransaction = resp;
          console.log(resp);
        }
      )
  }



  }

 


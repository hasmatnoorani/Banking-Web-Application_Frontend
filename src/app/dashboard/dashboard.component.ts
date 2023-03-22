import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerloginService } from '../managerlogin.service';
import { CustomerBankAccount } from '../model/CustomerBankAccount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  customerModel:CustomerBankAccount[];

  numberOfApprovedAccounts: number;
  numberOfRejectedAccounts:number;
  numberOfAccounts:number;

  //Get Date and Time

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date: Date) {
    return (
      [
      date.getFullYear(),
       this.padTo2Digits(date.getMonth() + 1),
       this.padTo2Digits(date.getDate()),
      ].join('-')
    );
  }

  formatTime(date: Date) {
    return (
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  

  today_date=this.formatDate (new Date());
  current_time=this.formatTime(new Date());

  //Get Date and Time End

  
  constructor(private router:Router,private service:ManagerloginService){}
  
  ngOnInit(): void {
    this.allCustomerBankAccount();
    if (localStorage.getItem('Manager-Token') != null)
    {
        //Redirect to homepage when logged in.
        this.router.navigateByUrl("/bank-manager-dashboard");
    }
    else
    {
        //Show login page and restrict homepage when not logged in.
        this.router.navigateByUrl("/bank-manager-login");
    }
  }

  onLogout(){
    localStorage.removeItem("Manager-Token");
    localStorage.removeItem("auth-user");
    localStorage.removeItem("user-type");
    this.router.navigateByUrl("/bank-manager-login");
    
  }

  approveCustomerBankAccount(id:string){
    this.service.doApproveCustomerBankAccount(id).subscribe(
      resp=>{
        this.ngOnInit();
      }
    );
  }

  rejectCustomerBankAccount(id:string){
    this.service.doRejectCustomerBankAccount(id).subscribe(
      (resp:any)=>{
        this.numberOfRejectedAccounts = this.customerModel.length;
        this.ngOnInit();

      }
    );
  }

  allCustomerBankAccount(){
    this.service.doGetAllCustomerBankAccount().subscribe(
      (res:any)=>{
      this.customerModel=res;
      this.numberOfAccounts = this.customerModel.length;
      }
    );
  }
}

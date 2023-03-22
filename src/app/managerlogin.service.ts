import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerBankAccount } from './model/CustomerBankAccount';
import { ManagerLogin } from './model/ManagerLogin';

@Injectable({
  providedIn: 'root'
})
export class ManagerloginService {


  constructor(private http:HttpClient, ) { }

  doAuth(manager:ManagerLogin){
    return this.http.post("http://localhost:9091/api/v1/bank-manager/auth/authenticate", manager, {responseType:"text"});
  }

 doApproveCustomerBankAccount(accountId:string){
  const token=localStorage.getItem("Manager-Token");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.http.get(`http://localhost:9091/api/v1/bank-manager/customer-bank-account/customer-account-approved/${accountId}`,{headers:header,responseType:"text"});
  }

  doRejectCustomerBankAccount(accountId:string){
    const token=localStorage.getItem("Manager-Token");
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.get(`http://localhost:9091/api/v1/bank-manager/customer-bank-account/customer-account-rejected/${accountId}`,{headers:header,responseType:"text"});
    }

    doGetAllCustomerBankAccount(){
    const token=localStorage.getItem("Manager-Token");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.http.get("http://localhost:9091/api/v1/bank-manager/customer-bank-account/all-customer-bank-account",{headers:header});
  }
  

 }
 

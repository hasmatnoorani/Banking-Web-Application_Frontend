import { Injectable } from '@angular/core';
import { CustomerLogin } from './model/CustomerLogin';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CustomerBankAccount } from './model/CustomerBankAccount';
import { CustomerTransactions } from './model/CustomerTransactions';

@Injectable({
  providedIn: 'root'
})
export class CustomerloginService {

  constructor(private http:HttpClient) { }

  doAuth(customer:CustomerLogin){
    return this.http.post("http://localhost:9090/api/v1/customer/auth/authenticate", customer, {responseType:"text"});
  }

  doAdd(customer:CustomerLogin){
    return this.http.post("http://localhost:9090/api/v1/customer/auth/add", customer, {responseType:"text"});
  }

  getBankAccount(){
    const token=localStorage.getItem("Customer-Token");
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.get(`http://localhost:9090/api/v1/customer-bank-account/${token}`,{headers:header});
  }

  
  getUserDetail(){
    const token=localStorage.getItem("Customer-Token");
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.get(`http://localhost:9090/api/v1/customer/${token}`,{headers:header});
  }

  doGetDebitedCustomerTransactions(startDate:Date,endDate:Date){
    const token=localStorage.getItem("Customer-Token");
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.get(`http://localhost:9090/api/v1/customer/transactions/get-transaction-by-customer-account-id/${token}/${startDate}/${endDate}`,{headers:header});
  }

  doGetCreditedCustomerTransactions(acNo:String,startDate:Date,endDate:Date){
    const token=localStorage.getItem("Customer-Token");
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.get(`http://localhost:9090/api/v1/customer/transactions/get-transaction-by-recipent-account-number/${acNo}/${startDate}/${endDate}`,{headers:header});
  }

  doInitiateTransaction(transaction:CustomerTransactions){
    const token = localStorage.getItem("Customer-Token");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.http.post(`http://localhost:9090/api/v1/customer/transactions/initiate-transaction/${token}`, transaction, {responseType:"text",headers:header});
  }

  doAddCustomerBankAccount(customerbankaccount:CustomerBankAccount){
    const token = localStorage.getItem("Customer-Token");
    if(token!=null){
      const header=new HttpHeaders({"Authorization":"Bearer "+token});
      return this.http.post(`http://localhost:9090/api/v1/customer-bank-account/add/${token}`, customerbankaccount, {responseType:"text",headers:header});
    }else{
      return this.http.get("http://localhost:9090/api/v1/customer-bank-account/error", {responseType:"text"});
    }
  }


 
}

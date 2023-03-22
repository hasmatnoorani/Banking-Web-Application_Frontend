import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerloginService } from '../customerlogin.service';
import { CustomerLogin } from '../model/CustomerLogin';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  customer:CustomerLogin = new CustomerLogin();


  constructor(private customersevice:CustomerloginService, private router:Router){}

  ngOnInit(): void {

  }

  doLogin(customer:CustomerLogin){
    let resp = this.customersevice.doAuth(customer);
    resp.subscribe(data=>{
      if(data=="Authentication Failed!"){
        alert("Username or password invalid. Please check and login again.");
        location.reload();
      }
      else if(data=="Authentication Failed! Check username & password."){
        alert("Username or password invalid. Please check and login again.");
        location.reload();
      }
      else{ 
      
      if(data!=null){
        localStorage.setItem("Customer-Token", data);
        localStorage.setItem("auth-user",customer.customerEmail);
        localStorage.setItem("user-type","CUSTOMER");
      }
      this.router.navigateByUrl("/home");
    }
    })
}

  doAddCustomer(customer:CustomerLogin){
  this.customersevice.doAdd(customer).subscribe(
    resp=>{
      console.log(resp);
    }
  )
}
}

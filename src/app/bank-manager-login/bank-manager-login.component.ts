import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerloginService } from '../managerlogin.service';
import { ManagerLogin } from '../model/ManagerLogin';

@Component({
  selector: 'app-bank-manager-login',
  templateUrl: './bank-manager-login.component.html',
  styleUrls: ['./bank-manager-login.component.css']
})
export class BankManagerLoginComponent {

  manager:ManagerLogin = new ManagerLogin();


  constructor(private managerLoginService:ManagerloginService, private router:Router){}

  ngOnInit(): void {

  }

  doLogin(manager:ManagerLogin){
    let resp = this.managerLoginService.doAuth(manager);
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
        localStorage.setItem("Manager-Token", data);
        localStorage.setItem("auth-user",manager.bankManagerEmail);
        localStorage.setItem("user-type","BANK-MANAGER");
      }
      this.router.navigateByUrl("/bank-manager-dashboard");
    }
    })
}


}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title = 'Banking-Web-Application-Frontend';
  isLoggedin:String="false";
  user:any="";
  greet:any="";

  constructor(private router:Router){}
  
  ngOnInit(): void {
    if (localStorage.getItem("Customer-Token") != null)
    {
        //Redirect to homepage when logged in.
        this.router.navigateByUrl("/home");
    }
    else
    {
        //Show login page and restrict homepage when not logged in.
        this.router.navigateByUrl("/authentication");
    }

  }

  login() {
    if (localStorage.getItem("Customer-Token")!==null || localStorage.getItem("Customer-Token")!==""){
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

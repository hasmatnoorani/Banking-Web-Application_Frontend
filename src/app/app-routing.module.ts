import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { BankManagerLoginComponent } from './bank-manager-login/bank-manager-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"/authentication", pathMatch:"full"},
  {path:"authentication", component:LoginSignupComponent},
  {path:"transactions",component:TransactionsComponent},
  {path:"money-transfer",component:MoneyTransferComponent},
  {path:"new-account-form",component:NewAccountComponent},
  {path:"user-profile",component:ProfileComponent},
  {path:"bank-account-details",component:BankAccountDetailsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"bank-manager-login",component:BankManagerLoginComponent},
  {path:"bank-manager-dashboard",component:DashboardComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ProfileComponent } from './profile/profile.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankManagerLoginComponent } from './bank-manager-login/bank-manager-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginSignupComponent,
    HomeComponent,
    TransactionsComponent,
    MoneyTransferComponent,
    NewAccountComponent,
    ProfileComponent,
    BankAccountDetailsComponent,
    ContactUsComponent,
    FooterComponent,
    DashboardComponent,
    BankManagerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

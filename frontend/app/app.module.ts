import './rxjs-extensions/rxjs-extensions';

// angular modules
import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TransactionComponent,
    HomeComponent
  ],
  providers: [
    //services here
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

import './rxjs-extensions';

// angular modules
import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup.component';

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
    SignupComponent
  ],
  providers: [
    //services here
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

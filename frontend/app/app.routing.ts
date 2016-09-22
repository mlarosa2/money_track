import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { TransactionComponent } from './transaction.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-transactions',
    component: TransactionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { SignupComponent } from './signup.component'

const appRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.userservice';

@Component({
  selector: 'sign-up',
  templateUrl: 'app/signup.component.html',
  providers: [UserService]
})

export class SignupComponent {
  constructor(private userService: UserService,
              private router: Router) {}

  signUp(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    this.userService.signUp(email, password);
  }
}

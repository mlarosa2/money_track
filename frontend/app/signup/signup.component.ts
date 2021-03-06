import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'sign-up',
  templateUrl: 'app/signup/signup.component.html',
  providers: [UserService]
})

export class SignupComponent {
  constructor(private userService: UserService,
              private router: Router) {}

  signUp(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    this.userService.signUp(email, password);
    this.router.navigate(['/login']);
  }
}

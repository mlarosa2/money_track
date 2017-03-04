import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'log-in',
  templateUrl: 'app/login/login.component.html',
  providers: [LoginService]
})

export class LoginComponent {
  constructor(private loginService: LoginService,
              private router: Router) {}
  login(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    this.loginService.login(email, password).then(() => {
      this.router.navigate(['/my-transactions']);
    })
  }
}

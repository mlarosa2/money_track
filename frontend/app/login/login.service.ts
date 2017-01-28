import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private loginUrl: string = 'http://localhost:3000/api/session';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  login(email: string, password: string): Promise<any> {
    return this.http
      .post(this.loginUrl, JSON.stringify({"user": {"email": email, "password": password}}), {headers: this.headers})
      .toPromise()
      .then(res => {
        let myBody = res.json().user;
        localStorage.setItem('currentUser', JSON.stringify(myBody));
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Error!', error);
    return Promise.reject(error.message || error);
  }
}

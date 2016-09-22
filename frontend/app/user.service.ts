import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  private userUrl: string = 'http://localhost:3000/api/users';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  signUp(email: string, password: string): Promise<User> {
    return this.http
      .post(this.userUrl, JSON.stringify({"user": {"email": email, "password": password}}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().dat)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Error!', error);
    return Promise.reject(error.message || error);
  }
}

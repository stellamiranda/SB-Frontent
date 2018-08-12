import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';

// Config
import { API_URL } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  validateCredential(email: string, password: string) {
    const url = API_URL + '/user_token';
    const httpOptions = {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const data = {
      'auth': {
        'email': email,
        'password': password
      }
    };
    return this._httpClient.post(url, data, httpOptions).pipe(
      map( res => res )
    );
  }

  registerCredential(email: string, password: string) {
    const url = API_URL + '/users/create';
    const httpOptions = {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const data = {
      'user': {
        'email': email,
        'password': password
      }
    };
    return this._httpClient.post(url, data, httpOptions).pipe(
      map( res => res )
    );
  }

}

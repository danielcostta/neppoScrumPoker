import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Storage} from '@ionic/storage';

@Injectable()
export class AuthProvider {

  public token: any;
  public api_url: string;

  constructor(public http: Http, public storage: Storage) {
    this.api_url = 'http://localhost:8080/api/v1/';
  }

  checkAuthentication() {
    return new Promise((resolve, reject) => {

      //Load token if exists
      this.storage.get('token').then((value) => {

        this.token = value;

        let headers = new Headers();
        headers.append('Authorization', this.token);

        this.http.get(this.api_url + 'auth/protected', {headers: headers})
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });

      });

    });
  }

  login(credentials) {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.api_url + 'auth/login', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          resolve(data);

          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });
  }

  logout() {
    this.storage.set('token', '');
  }

}

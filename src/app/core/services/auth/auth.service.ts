import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly path = {
    login: 'auth/login',
    register: 'auth/register',
  };
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  login(payload: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<any>(
      `${environment.apiUrl}/${this.path.login}`,
      payload
    );
  }

  register(payload: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<any>(
      `${environment.apiUrl}/${this.path.register}`,
      payload
    );
  }
}

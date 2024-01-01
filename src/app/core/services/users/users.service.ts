import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private paths = { users: 'users' };

  constructor(private apiService: ApiService, private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.apiService.getAll(this.paths.users);
  }
}

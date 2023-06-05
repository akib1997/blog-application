import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IArticle } from '../../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>('http://localhost:3000/articles')
  }
}

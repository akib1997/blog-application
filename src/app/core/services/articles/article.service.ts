import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable, catchError, throwError } from 'rxjs';
import { IArticle } from '../../models/article.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'articles';

  constructor(private apiService: ApiService, private http: HttpClient) {}

  getAll(): Observable<IArticle[]> {
    return this.apiService.getAll(this.url);
  }

  create(payload: IArticle): Observable<IArticle> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<IArticle>(`${environment.apiUrl}/${this.url}`, payload).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err.message);
      })
    );
  }
}

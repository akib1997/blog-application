import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IArticle } from '../../models/article.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  /**
   * Retrieve Resources based on resource type.
   * @param path Type of resource.
   * @param qParams query params
   */
  getAll<T>(path: string, qParams?: T): Observable<T> {
    const url = `${this.baseUrl}/${path}${this.processQuery(qParams)}`;

    return this.http.get<T>(url);
  }

  processQuery(obj: any): string {
    if (obj === null || obj === undefined) {
      return '';
    }
    const str = Object.entries(obj)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value as any)}`
      )
      .join('&');
    return str;
  }
}

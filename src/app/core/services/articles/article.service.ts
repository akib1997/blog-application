import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IArticle } from '../../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'articles';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<IArticle[]> {
    return this.apiService.getAll(this.url);
  }
}

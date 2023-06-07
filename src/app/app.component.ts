import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api/api.service';
import { IArticle } from './core/models/article.model';
import { Observable } from 'rxjs';
import { IBook } from './store/book/book.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-application';


  constructor() {}

  ngOnInit(): void {
  }



}

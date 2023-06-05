import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api/api.service';
import { IArticle } from './core/models/article.model';
import { Observable } from 'rxjs';
import { IBook } from './store/book/book.interface';
import { select, Store } from '@ngrx/store';
import * as fromBooks from './store/book/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog-application';
  articles!: IArticle[]

  constructor(private api: ApiService, private readonly store: Store) {}

  ngOnInit(): void {
    // this.getArticles();
    this.initDispatch();
    this.initSubscriptions();
  }

  getArticles() {
    this.api.getArticles().subscribe(d => this.articles = d)
  }
  books$!: Observable<IBook[]>;
    isLoading$!: Observable<boolean>;


    onCreateBook(name: string): void {
        this.store.dispatch(fromBooks.createBook({
            book: {
                id: Math.random(),
                name
            }
        }));
    }

    onUpdateBook(book: IBook): void {
        this.store.dispatch(fromBooks.updateBook({book}));
    }

    onDeleteBook(book: IBook): void {
        this.store.dispatch(fromBooks.deleteBook({book}));
    }

    private initDispatch(): void {
        this.store.dispatch(fromBooks.getBooks());
    }

    private initSubscriptions(): void {
        this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
        this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
    }
}

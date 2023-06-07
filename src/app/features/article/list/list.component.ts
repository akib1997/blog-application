import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/core/models/article.model';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ArticleService } from 'src/app/core/services/articles/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articles!: IArticle[];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getAll().subscribe((d) => (this.articles = d));
  }

  addArticle() {
    this.router.navigate(['article/add']);
  }

}

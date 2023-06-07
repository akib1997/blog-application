import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/core/models/article.model';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {


  constructor() {}

  ngOnInit() {

  }

}

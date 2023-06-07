import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './features/article/article.component';
import { BooksComponent } from './features/books/books.component';

const routes: Routes = [
  {
    component: ArticleComponent,
    path: 'article',
    loadChildren: () => import('./features/article/article.module').then(m => m.ArticleModule)
  },
  {
    component: BooksComponent,
    path: 'books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

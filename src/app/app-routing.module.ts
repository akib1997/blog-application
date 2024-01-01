import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './features/article/article.component';
import { BooksComponent } from './features/books/books.component';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full',
  },
  {
    component: ArticleComponent,
    path: 'article',
    loadChildren: () =>
      import('./features/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
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

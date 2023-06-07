import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    component: ListComponent,
    path: '',
  },
  {
    component: AddEditComponent,
    path: 'add',
  },
  {
    component: AddEditComponent,
    path: 'edit/:id',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}

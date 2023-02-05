import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

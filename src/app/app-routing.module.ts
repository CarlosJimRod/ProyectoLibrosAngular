import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },

  {
    path: 'editorials',
    loadChildren: () => import('./editorial/editorial.module').then(m => m.EditorialModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./author/author.module').then(m => m.AuthorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

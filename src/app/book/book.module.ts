import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from '../custom-filter-pipe.pipe';



@NgModule({
  imports: [CommonModule, RouterModule, BookRoutingModule, ReactiveFormsModule, NgxPaginationModule, FormsModule],
  exports: [BookListComponent],
  declarations: [BookListComponent, BookDetailComponent, BookCreateComponent, CustomFilterPipe],
})
export class BookModule { }

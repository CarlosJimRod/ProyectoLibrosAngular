import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookDetail } from '../book-detail';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<BookDetail> = [];
  selected: boolean = false;
  selectedBook!: BookDetail;
  pagina: number = 1;
  searchedBook: any;

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().subscribe({ next: (apiData: BookDetail[]) => this.books = apiData, error: e => console.error(e) });
  }

  onSelected(book: BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }
}

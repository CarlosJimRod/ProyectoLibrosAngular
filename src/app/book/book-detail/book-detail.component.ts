import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from '../book-detail';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit() {
    if (this.bookDetail === undefined) {
      this.route.paramMap.subscribe(params=>{
        let bookId=params.get('id')
        if (bookId) {
          this.bookService.getBook(bookId).subscribe((apiData: BookDetail) => {
            this.bookDetail = apiData;
          })
        }
      })
    }
  }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { catchError, Observable, throwError } from 'rxjs';
import { BookDetail } from './book-detail';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.baseUrl + 'books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookDetail[]> {
    return this.http
      .get<BookDetail[]>(this.apiUrl);
  }

  getBook(id: string): Observable<BookDetail> {
    return this.http.get<BookDetail>(this.apiUrl + '/' + id);
  }

  createBook(book: BookDetail): Observable<BookDetail> {
    return this.http.post<BookDetail>(this.apiUrl, book);
  }

  createAuthorBook(idBook: number, idAuthor: number) {
    return this.http.post(
      this.apiUrl + '/' + idBook + '/authors/' + idAuthor,
      undefined
    );
  }
}

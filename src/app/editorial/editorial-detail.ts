import { Book } from "../book/book";
import { Editorial } from "./editorial";

export class EditorialDetail extends Editorial {
  books: Array<Book> = [];

  constructor(id: number, name: string, fechaCreacion: any, emailDirector: string, books: Array<Book>) {
    super(id, name, fechaCreacion, emailDirector);
    this.books = books;
  }

}

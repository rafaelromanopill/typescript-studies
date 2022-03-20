import { IBookFormated, IBookRepo } from "../interfaces/books-interface";
import { IBookService } from "../interfaces/books-service";

export class BookService implements IBookService {
  private bookRepo: IBookRepo;

  constructor(bookRepo: IBookRepo) {
    this.bookRepo = bookRepo;
  }
  async createBook(book: IBookFormated): Promise<IBookFormated> {
      return this.bookRepo(book);
  }
}
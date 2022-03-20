import { IBookFormated, IBookRepo } from "../interfaces/books-interface";

export class BookRepo implements IBookRepo {
  private booksRepository: any;

  constructor(books: any) {
    this.booksRepository =  books;
  }

  async createOrUpdate(book: IBookFormated): Promise<IBookFormated> {
    return this.booksRepository.upsert(book);
  }
}

import { IBookFormated } from "./books-interface";

export interface IBookService {
  createBook(book: IBookFormated): Promise<IBookFormated>;
  formatToDB(book: IBookFormated): Promise<IBookFormated>;
}
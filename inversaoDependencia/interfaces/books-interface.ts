export interface IBookFormated {
  nome: string;
  paginas: number;
}

export interface IBookRepo {
  createOrUpdate(book: IBookFormated): Promise<IBookFormated>;
};

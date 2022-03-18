import { Model, DataTypes, Optional } from 'sequelize';

export interface BooksAttributes {
  id: number,
  name: string,
}

type BooksCreateAttributes = Optional<BooksAttributes, 'id'>

export interface BooksInstance extends Model<BooksAttributes, BooksCreateAttributes>, 
  BooksAttributes {
    createdAt?: Date;
    updateAt?: Date;
}

const books = (sequelize: any) => sequelize.define(
  'books',
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }
)

export { books };


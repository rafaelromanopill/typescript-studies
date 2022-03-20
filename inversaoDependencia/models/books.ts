import { Model, DataTypes, Optional } from "sequelize";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const books = (sequelize) =>
  sequelize.define("orders", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paginas: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });

export { books };

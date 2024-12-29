const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Author = require("./author.model");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Author,
      key: "id",
    },
  },
});

Book.belongsTo(Author, { foreignKey: "authorId" });
Author.hasMany(Book, { foreignKey: "authorId" });

module.exports = Book;
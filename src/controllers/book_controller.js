const Books = require('../models/pedidos');

class BookController {
  static index(req, res) {
    return Books;
  }

  static show(req, res) {
    return Books[req.params.id];
  }

  static create(req, res) {
    const { name, description, author } = req.body;
    let livro = {
      name: name,
      description: description,
      author: author,
    };

    Books[Books.last + 1] = livro;
    Books.last += 1;

    return livro;
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, description, author } = req.body;

    let book = Object(Books[id]);
    if (name !== undefined) book.name = name;
    if (description !== undefined) book.description = description;
    if (author !== undefined) book.author = author;

    Books[id] = book;
    return book;
  }

  static delete(req, res) {
    const { id } = req.params;
    Books[id] = null;

    return { success: true };
  }
}

module.exports = BookController;

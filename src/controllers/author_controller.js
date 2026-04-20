const Authors = require('../models/cardapio');

class AuthorController {
  static index(req, res) {
    return Authors;
  }

  static show(req, res) {
    return Authors[req.params.id];
  }

  static create(req, res) {
    const { name, age } = req.body;
    let author = {
      name: name,
      age: age,
    };

    Authors[Authors.last + 1] = author;
    Authors.last += 1;

    return author;
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;

    let Author = Object(Authors[id]);
    if (name !== undefined) Author.name = name;
    if (age !== undefined) Author.age = age;

    Authors[id] = Author;
    return Author;
  }

  static delete(req, res) {
    const { id } = req.params;
    Authors[id] = null;

    return { success: true };
  }
}

module.exports = AuthorController;

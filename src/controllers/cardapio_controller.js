const cardapio = require('../models/cardapio');
const Cardapio = require('../models/cardapio');

class CardapioController {
  static index(req, res) {
    return Cardapio;
  }

  static show(req, res) {
    return Cardapio[req.params.id];
  }

  static create(req, res) {
    const { name, preco } = req.body;
    let author = {
      name: name,
      preco: preco,
    };

    Cardapio[Cardapio.last + 1] = cardapio;
    Cardapio.last += 1;

    return cardapio;
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, preco } = req.body;

    let Author = Object(Cardapio[id]);
    if (name !== undefined) Author.name = name;
    if (preco !== undefined) Author.preco = preco;

    Cardapio[id] = Author;
    return Author;
  }

  static delete(req, res) {
    const { id } = req.params;
    Cardapio[id] = null;

    return { success: true };
  }
}

module.exports = CardapioController;

const pedidos_controller = require('../controllers/pedidos_controller');
const cardapio_controller = require('../controllers/cardapio_controller');

function routes(app) {
  // routes of pedidos
  app.get('/pedidos/', (req, res) => {
    res.send(JSON.stringify(pedidos_controller.index(req, res)));
  });

  app.get('/pedidos/:id', (req, res) => {
    res.send(JSON.stringify(pedidos_controller.show(req, res)));
  });

  app.post('/pedidos/', (req, res) => {
    res.send(JSON.stringify(pedidos_controller.create(req, res)));
  });

  app.put('/pedidos/:id', (req, res) => {
    res.send(JSON.stringify(pedidos_controller.update(req, res)));
  });

  app.delete('/pedidos/:id', (req, res) => {
    res.send(JSON.stringify(pedidos_controller.delete(req, res)));
  });

  // routes of cardapio
  app.get('/cardapio/', (req, res) => {
    res.send(JSON.stringify(cardapio_controller.index(req, res)));
  });

  app.get('/cardapio/:id', (req, res) => {
    res.send(JSON.stringify(cardapio_controller.show(req, res)));
  });

  app.post('/cardapio/', (req, res) => {
    res.send(JSON.stringify(cardapio_controller.create(req, res)));
  });

  app.put('/cardapio/:id', (req, res) => {
    res.send(JSON.stringify(cardapio_controller.update(req, res)));
  });

  app.delete('/cardapio/:id', (req, res) => {
    res.send(JSON.stringify(cardapio_controller.delete(req, res)));
  });
}

module.exports = routes;
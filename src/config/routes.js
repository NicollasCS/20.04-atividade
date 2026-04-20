const book_controller = require('../controllers/book_controller');
const author_controller = require('../controllers/author_controller');

function routes(app) {
  // routes of book
  app.get('/books/', (req, res) => {
    res.send(JSON.stringify(book_controller.index(req, res)));
  });

  app.get('/book/:id', (req, res) => {
    res.send(JSON.stringify(book_controller.show(req, res)));
  });

  app.post('/book/', (req, res) => {
    res.send(JSON.stringify(book_controller.create(req, res)));
  });

  app.put('/book/:id', (req, res) => {
    res.send(JSON.stringify(book_controller.update(req, res)));
  });

  app.delete('/book/:id', (req, res) => {
    res.send(JSON.stringify(book_controller.delete(req, res)));
  });

  // routes of author
  app.get('/authors/', (req, res) => {
    res.send(JSON.stringify(author_controller.index(req, res)));
  });

  app.get('/author/:id', (req, res) => {
    res.send(JSON.stringify(author_controller.show(req, res)));
  });

  app.post('/author/', (req, res) => {
    res.send(JSON.stringify(author_controller.create(req, res)));
  });

  app.put('/author/:id', (req, res) => {
    res.send(JSON.stringify(author_controller.update(req, res)));
  });

  app.delete('/author/:id', (req, res) => {
    res.send(JSON.stringify(author_controller.delete(req, res)));
  });
}

module.exports = routes;

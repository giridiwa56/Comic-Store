const publisherRoute = require('express').Router();
const PublisherController = require('../controllers/PublisherController');

publisherRoute.get('/', PublisherController.getPublishers);
publisherRoute.post('/add', PublisherController.add);
publisherRoute.delete('/remove/:id', PublisherController.remove);
publisherRoute.put('/edit/:id', PublisherController.edit);
publisherRoute.get('/detail/:id', PublisherController.detail);
publisherRoute.get('/detail/:id/listcomic', PublisherController.listComics);

module.exports = publisherRoute;


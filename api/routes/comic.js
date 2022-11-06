const comicRoute = require('express').Router();
const ComicController = require('../controllers/ComicController');

comicRoute.get('/', ComicController.getComics);
comicRoute.post('/add', ComicController.add);
comicRoute.delete('/remove/:id',ComicController.remove);
comicRoute.put('/edit/:id', ComicController.edit);
comicRoute.get('/detail/:id', ComicController.detail);
comicRoute.get('/search/:title', ComicController.searchTitle);

module.exports = comicRoute;
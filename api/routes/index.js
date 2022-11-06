const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: 'Comic Store Online'
    });
});

const publisherRoutes = require('./publisher');
const comicRoutes = require('./comic');

route.use('/publishers', publisherRoutes);
route.use('/comics', comicRoutes);

module.exports = route;
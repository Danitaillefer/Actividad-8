const router = require('express').Router();

//Rutas de /api 
router.use('/autores', require('./api/autores'));
router.use('/posts', require('./api/posts'));

module.exports = router;
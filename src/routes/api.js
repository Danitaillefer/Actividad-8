const router = require('express').Router();

//Rutas de /api 
router.use('/autores', require('./api/clientes'));
router.use('/posts', require('./api/posts'));

module.exports = router;
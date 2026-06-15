const router = require('express').Router();
const {getAll, getById, create} = require('../../controllers/autores.controller');
const { getAutorById } = require('../../controllers/posts.controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.get('/:id/posts', getAutorById)

module.exports = router;
const router = require('express').Router();
const {getAll, getById, create} = require('../../controllers/autores.controller');
const { getAutorById } = require('../../controllers/posts.controller');

router.get('/', getAll);
router.get('/:autorId', getById);
router.post('/', create);
router.get('/:autorId/posts', getAutorById)

module.exports = router;
const router = require('express').Router();
const {getAll, getById, create} = require('../../controllers/posts.controller')

router.get('/', getAll);
router.get('/:postId', getById);
router.post('/', create);

module.exports = router;
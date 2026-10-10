const express = require('express');
const beerController = require('../controllers/beerController');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.route('/')
    .get(beerController.getAll)
    .post(upload.single('image'), beerController.create);

router.route('/:id')
    .get(beerController.getById)
    .put(upload.single('image'), beerController.update)
    .delete(beerController.remove);

module.exports = router;
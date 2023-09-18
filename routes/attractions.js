const router = require('express').Router();
const attractionController = require('../controllers/Attractions.controller');


router.route('/').get(attractionController.getAll)
router.route('/:id').get(attractionController.getById)
router.route('/').post(attractionController.post)
router.route('/:id').post(attractionController.update)
router.route('/:id').delete(attractionController.delete)

module.exports = router;
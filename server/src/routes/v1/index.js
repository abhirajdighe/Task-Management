const express = require('express');
const CurdController = require('../../controllers/curd-controller')
const router = express.Router();

router.post('/task',CurdController.create);
router.delete('/task/:id',CurdController.destroy);
router.get('/task/:id',CurdController.get);
router.get('/tasks',CurdController.getAll);
router.patch('/task/:id',CurdController.update);

module.exports = router;
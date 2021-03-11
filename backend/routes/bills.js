const express = require('express');
const verifyParams = require('../middleware/verifyparams')
const router = express.Router();

const ctrl = require('../controllers/billsController');


router.get('/', ctrl.getList )
router.get('/:id',verifyParams, ctrl.getItem)
router.post('/post', ctrl.postItem)
router.put('/edit/:id', ctrl.putItem)
router.delete('/delete/:id', ctrl.deleteItem)

module.exports = router
const express = require('express');
const router =  express.Router();

const { addMenu,toggleMenuStatus,updateMenu } = require('../controllers/menuHandler');

router.post('/addMenu',addMenu);
router.put('/toggleMenuStatus',toggleMenuStatus);
router.put('/updateMenu/:id',updateMenu);

module.exports = router;
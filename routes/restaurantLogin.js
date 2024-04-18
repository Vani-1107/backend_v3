const express = require('express');
const router =  express.Router();

const { registerRestaurant,login } = require('../controllers/restaurantLoginHandler');

router.post('/regsiterRestaurant' , registerRestaurant);
router.get('/restaurantLogin' ,login);

module.exports = router;
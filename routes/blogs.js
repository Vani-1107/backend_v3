const express = require('express');
const router =  express.Router();

const {addBlog, editBlog} = require('../controllers/blogs');

router.post("/addBlog" ,addBlog );
router.put('/editBlog/:id', editBlog);

module.exports = router;
const express = require('express');
const { readDB } = require('../middleware/readData');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register', {title: 'Express'})
});

module.exports = router;

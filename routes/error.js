const express = require('express');
const routerRegister = express.Router();

/* GET users listing. */
routerRegister.get('/', function(req, res) {
    res.render('error', {title: 'Express'})
});

module.exports = routerRegister;
const express = require('express')
const loggedRouter = express.Router();
const path = require('path');
const { checkLogin } = require('../middleware/checkLogin');
const { readDB } = require('../middleware/readData');

loggedRouter.post('/logged', [readDB,checkLogin],(req, res) => {
    res.render('logged', {title: 'Express'});
})

loggedRouter.get('/logged',(req, res) => {
    res.render('logged', {title: 'Express'});
})
module.exports.loggedRouter = loggedRouter
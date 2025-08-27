const express = require('express')
const loggedRouter = express.Router();
const path = require('path');

loggedRouter.get('/logged', (req, res) => {
    res.render('logged', {title: 'Express'});
})


module.exports.loggedRouter = loggedRouter
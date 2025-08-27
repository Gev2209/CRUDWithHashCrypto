const express = require('express')
const loginRouter = express.Router();
const path = require('path');

loginRouter.get('/login', (req, res) => {
    res.render('login', {title: 'Express'})
})


module.exports.loginRouter = loginRouter
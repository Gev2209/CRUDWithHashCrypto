const express = require('express')
const loginRouter = express.Router();

loginRouter.get('/login',(req, res) => {
    res.render('login', {title: 'Express'})
})


module.exports.loginRouter = loginRouter
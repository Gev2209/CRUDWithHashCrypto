const express = require('express');
const { readDB } = require('../middleware/readData');
const path = require('path');
const fs = require('fs').promises;
const registerRouter = express.Router();
const bycipt = require('bcryptjs');
const { checkEmail } = require('../middleware/checkEmail');
const { checkPass } = require('../middleware/checkPassword');

/* GET users listing. */
registerRouter.get('/register', (req, res) => {
    res.render('register', {title: 'Express'})
});


registerRouter.post('/register', [readDB, checkEmail,checkPass], async (req, res) => {
    const {users} = res.locals
    const body = req.body
    const hashPass = await bycipt.hash(body.password, 10);
    const user = {
        id: crypto.randomUUID(),
        name : body.name,
        email : body.email,
        password : body.password !== '' ? `${hashPass}` : '',
        date : body.date,
        gener : body.gender
    }
    users.push(user);

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users))
    res.redirect('http://localhost:3001/auth/login')
})
module.exports.registerRouter = registerRouter;
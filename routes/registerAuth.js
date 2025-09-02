const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const registerRouter = express.Router();
const bycipt = require('bcryptjs');
const { checkEmail } = require('../middleware/checkEmail');
const { checkPass } = require('../middleware/checkPassword');
const { readDB } = require('../middleware/readData');
const { schema } = require('../schema/register')


/* GET users listing. */
registerRouter.get('/register', (req, res) => {
    res.render('register', {title: 'Express'})
});


registerRouter.post('/register', [readDB, checkEmail,checkPass], async (req, res) => {
    const {users} = res.locals
    const body = req.body
    // const validator = await schema.validateAsync(req.body)
    const hashPass = await bycipt.hash(body.password, 10);
    const user = {
        id: crypto.randomUUID(),
        name : body.name,
        email : body.email,
        password : body.password !== '' ? `${hashPass}` : '',
        date : body.date,
        gender : body.gender
    }
    users.push(user);

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users))
    res.redirect('http://localhost:3001/auth/login')
})




registerRouter.patch('/change/:id', readDB,async (req, res) => {
    let { users } = res.locals
    let item = users.find(i => i.id == req.params.id)
    Object.assign(item, req.body)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.json(users)
})


registerRouter.delete('/delete/:id', readDB,  async (req, res) => {
    let { users } = res.locals
    users = users.filter(item => item.id != req.params.id)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.json(users)
})
module.exports.registerRouter = registerRouter;
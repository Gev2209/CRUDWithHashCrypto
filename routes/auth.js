const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const registerRouter = express.Router();
const loginRouter = express.Router();
const loggedRouter = express.Router();
const bycipt = require('bcryptjs');
const { checkEmail } = require('../middleware/checkEmail');
const { checkPass } = require('../middleware/checkPassword');
const { readDB } = require('../middleware/readData');
const { schema } = require('../schema/register');
const { checkLogin } = require('../middleware/checkLogin');
const AuthController = require('../controllers/authControllers');


/* GET users listing. */

const authController = new AuthController();
registerRouter.get('/register', authController.getregister);

registerRouter.post('/register', [readDB, checkEmail, checkPass], authController.postRegister)


registerRouter.put('/change/:id', readDB, async (req, res) => {
    let { users } = res.locals
    let item = users.find(i => i.id == req.params.id)
    Object.assign(item, req.body)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.json(users)
})


registerRouter.delete('/delete/:id', readDB, async (req, res) => {
    let { users } = res.locals
    users = users.filter(item => item.id != req.params.id)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.json(users)
})


loginRouter.get('/login', authController.getLogin)


loggedRouter.post('/logged', [readDB, checkLogin], (req, res) => {
    res.render('logged', { title: 'Express' });
})


loggedRouter.get('/logged', authController.getLogged)

module.exports = {
    registerRouter,
    loginRouter,
    loggedRouter
};
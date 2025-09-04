const express = require('express');
const registerRouter = express.Router();
const loginRouter = express.Router();
const loggedRouter = express.Router();
const { checkEmail } = require('../middleware/checkEmail');
const { checkPass } = require('../middleware/checkPassword');
const { readDB } = require('../middleware/readData');
const { checkLogin } = require('../middleware/checkLogin');
const AuthController = require('../controllers/authControllers');


const authController = new AuthController();


registerRouter.get('/register', authController.getregister);

registerRouter.post('/register', [readDB, checkEmail, checkPass], authController.postRegister)

loginRouter.get('/login', authController.getLogin)

loggedRouter.post('/logged', [readDB, checkLogin], authController.postLogged)

loggedRouter.get('/logged', authController.getLogged)


module.exports = {
    registerRouter,
    loginRouter,
    loggedRouter
};
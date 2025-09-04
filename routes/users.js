const express = require('express');
const usersTableRouter = express.Router()
const { readDB } = require('../middleware/readData');
const AuthController = require('../controllers/authControllers');

const authController = new AuthController();

usersTableRouter.get('/users', readDB ,authController.getUsers)

module.exports.usersTableRouter = usersTableRouter
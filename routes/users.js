const express = require('express');
const usersTableRouter = express.Router()
const fs = require('fs').promises
const path = require('path');
const { readDB } = require('../middleware/readData');


usersTableRouter.get('/users', readDB ,async (req, res) => {
    const {users} = res.locals
    res.render(path.join(__dirname, '..', 'views', 'usersTable.ejs'), {title : "Helloo", users});
})

module.exports.usersTableRouter = usersTableRouter
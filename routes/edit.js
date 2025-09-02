const express = require('express');
const { readDB } = require('../middleware/readData');
const editRout = express.Router();
const deleteRout = express.Router();
const path = require('path');
const fs = require('fs').promises

editRout.get('/edit/:id', readDB, async (req, res) => {
    const {users} = res.locals
    const user = users.find((e) => e.id === req.params.id)
    res.render(path.join(__dirname, '..', 'views', 'edit.ejs'), {title : "Hello Gevorg", users : user});
})

editRout.post('/edit/:id', readDB, async(req, res) => {
    const {users} = res.locals
    const user = users.find((e) => e.id === req.params.id)
    const body = req.body

    if (user) {
        Object.assign(user,body)
    }

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect('/users')
})


deleteRout.post('/delete/:id',readDB, async (req, res) => {
    let {users} = res.locals
    users = users.filter((e) => e.id !== req.params.id);
    console.log(users, 'users')

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect('/users')
})


module.exports = {
    editRout,
    deleteRout
}
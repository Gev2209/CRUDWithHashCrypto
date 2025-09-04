const express = require('express');
const { readDB } = require('../middleware/readData');
const editRout = express.Router();
const deleteRout = express.Router();
const ChangeControllers = require('../controllers/changeControllers');



const changeControllers = new ChangeControllers();

editRout.get('/edit/:id', readDB,changeControllers.getEditUsers);

editRout.post('/edit/:id', readDB, changeControllers.postEditUsers);

deleteRout.post('/delete/:id',readDB, changeControllers.postDeleteUsers)


module.exports = {
    editRout,
    deleteRout
}
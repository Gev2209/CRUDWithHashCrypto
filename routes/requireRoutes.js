const indexRouter = require('./index');
const usersRouter = require('./error');
const { registerRouter, loginRouter, loggedRouter } = require('./auth');
const { usersTableRouter } = require('./users');
const { editRout, deleteRout } = require('./edit');

module.exports = {
    indexRouter,
    usersRouter,
    loggedRouter,
    loginRouter,
    registerRouter,
    usersTableRouter,
    editRout,
    deleteRout
}
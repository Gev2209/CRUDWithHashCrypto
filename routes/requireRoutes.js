const indexRouter = require('./index');
const usersRouter = require('./error');
const { registerRouter, loginRouter, loggedRouter } = require('./auth');
const { usersTableRouter } = require('./users');

module.exports = {
    indexRouter,
    usersRouter,
    loggedRouter,
    loginRouter,
    registerRouter,
    usersTableRouter
}
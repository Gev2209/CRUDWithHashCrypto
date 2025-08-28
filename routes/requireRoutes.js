const indexRouter = require('./index');
const usersRouter = require('./error');
const { loginRouter } = require('./authLogin');
const { registerRouter } = require('./registerAuth');
const { loggedRouter } = require('./logged');
const { usersTableRouter } = require('./users');

module.exports = {
    indexRouter,
    usersRouter,
    loggedRouter,
    loginRouter,
    registerRouter,
    usersTableRouter
}
const indexRouter = require('./index');
const usersRouter = require('./error');
const { loginRouter } = require('./authLogin');
const { registerRouter } = require('./registerAuth');
const { loggedRouter } = require('./logged');


module.exports = {
    indexRouter,
    usersRouter,
    loggedRouter,
    loginRouter,
    registerRouter
}
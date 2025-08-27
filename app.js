const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/error');
const { loginRouter } = require('./routes/authLogin');
const { registerRouter } = require('./routes/registerAuth');
const { loggedRouter } = require('./routes/logged');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));




app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/auth',loginRouter);

app.use('/auth',registerRouter);

app.use('/',loggedRouter);



app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

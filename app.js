var createError = require('http-errors');
const express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//importando as rotas de edição de produtos e usuario
const produtoRoutes =  require('./routes/produtos')
const usersRouter = require('./routes/users.routes')


const { Server } = require('http');

//inicialização do express
var app = express();

// view engine setup (diretorio de Views)
app.set('views', path.join(__dirname, 'views'));

//Definindo o EJS como template engine
app.set('view engine', 'ejs');


// rotas
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// << === definindo repositorio de arquivos estaticos  === >>
app.use(express.static(path.join(__dirname, 'public')));

// << === permitir o uso de PUT e Delete no servidor  === >>
app.use(methodOverride('_method'));

//<< === permitir o uso do formulario multipart/form-data   === >>
app.use(express.urlencoded({extended: false}));


app.use('/adm', produtoRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;

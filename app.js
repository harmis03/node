var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/Product');
var login_registerRouter = require('./routes/Login_register');
var Category = require('./routes/Category');
var subCategory = require('./routes/subCategory');
var Brand_name = require('./routes/BrandName');
var user_login = require('./routes/Userlogin');
var Session = require('./routes/Session');
var Multerimage = require('./routes/Multer');
var Brandlogin = require('./routes/Brandlogin');
var Creatorlogin = require('./routes/Creator');
var Contect = require('./routes/Contect');
var Brand_contect = require('./routes/Brand_contect');
var Collabration = require('./routes/Collabration');
var Rating = require('./routes/Rating')


const cors = require('cors');
// const login = require('./Models/LoginSchema');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/login_register', login_registerRouter);
app.use('/category', Category);
app.use('/subcategory', subCategory);
app.use('/Brandname', Brand_name);
app.use('/userlogin', user_login);
app.use('/Multer', Multerimage)
app.use('/Session', Session);
app.use('/Brandlogin', Brandlogin);
app.use('/Creator', Creatorlogin);
app.use('/Contect', Contect);
app.use('/Brand_contact', Brand_contect);
app.use('/Collabration', Collabration);
app.use('/Rating',Rating)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

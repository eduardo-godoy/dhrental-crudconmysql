// REQUIRES 

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// ROUTERS
const cookieMiddleware = require('./middlewares/cookieMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const routersMain = require('./routers/mainRouters');
const routersUsers = require('./routers/usersRouters');
const routersProducts = require('./routers/productsRouters');

// APIS ROUTERS

const productsApiRouter = require('./routers/api/productsApiRouter');
const usersApiRouter = require('./routers/api/usersApiRouters');
const categorysApiRouter = require('./routers/api/categoryApiRouters');

//MIDDLEWARES

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({ secret:'secret', resave:false, saveUninitialized:false}));
app.use(cookieMiddleware);
app.use(userLoggedMiddleware);


app.listen(3001, () => {
    console.log('servidor corriendo en el puerto 3001');
});

app.use('/', routersMain);
app.use('/users', routersUsers);
app.use('/products', routersProducts);

//Apis

app.use('/api/products', productsApiRouter);
app.use('/api/users', usersApiRouter);
app.use('/api/categorys',categorysApiRouter);

// ERROR 404 

app.use((req, res, next) => {
    res.status(404).render('error404');
});
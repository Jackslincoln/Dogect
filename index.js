const express = require("express");

//Initialization
const app = express();

const routerApi = require('./routes');
const {logErrors, boomErrorHandler, errorHandler} = require('./middlewares/error.handler');
const db = require("./db");
const { DBCONNECTION } = require('./consts.json');

//Settings
const port = 3000;

//Middlewares
app.use(express.json());

//Global variables

//Routes

//Static files

//Server is listening
app.listen(port, () => {
  console.log('Servidor montado en puerto ' + port);
});


db(DBCONNECTION);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



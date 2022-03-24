const express = require("express");
const routerApi = require('./routes');
const {logErrors, boomErrorHandler, errorHandler} = require('./middlewares/error.handler');
const db = require("./db");
const { DBCONNECTION } = require('./consts.json');
const app = express();
const port = 3000;

db(DBCONNECTION);

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Servidor montado en puerto ' + port);
});

// const port = 3000 || process.env.PORT;
// db();
// app.listen(port, () =>{
//     console.log(`Servidor montado en puerto ${port}`);
// });

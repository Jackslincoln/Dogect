const express = require("express");
const routerApi = require('./routes');
const {logErrors, boomErrorHandler, errorHandler} = require('./middlewares/error.handler');

//const db = require("./config/db");
const app = express();
const port = 3000;

// app.use(require("./routes/equipos-route"));
// app.use(require("./routes/huesos-route"));
// app.use(require("./routes/imagenes-route"));
// app.use(require("./routes/manada-route"));
// app.use(require("./routes/notas-route"));
// app.use(require("./routes/roles-route"));
// app.use(require("./routes/tareas-route"));
// app.use(require("./routes/usuario-route"));

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

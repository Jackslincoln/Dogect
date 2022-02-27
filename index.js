const express = require("express");
const routerApi = require('./routes');

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

app.listen(port, () => {
  console.log('Servidor montado en puerto ' + port);
})

// const port = 3000 || process.env.PORT;
// db();
// app.listen(port, () =>{
//     console.log(`Servidor montado en puerto ${port}`);
// });

const express = require("express");
const db = require("./config/db");

db();

const app = express();
app.use(require("./routes/equipos-route"));
app.use(require("./routes/huesos-route"));
app.use(require("./routes/imagenes-route"));
app.use(require("./routes/manada-route"));
app.use(require("./routes/notas-route"));
app.use(require("./routes/roles-route"));
app.use(require("./routes/tareas-route"));
app.use(require("./routes/usuario-route"));

const port = 3000 || process.env.PORT;
app.listen(port, () =>{
    console.log(`Servidor montado en puerto ${port}`);
});
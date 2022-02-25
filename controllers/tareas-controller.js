const tareas_service = require('../service/tareas-service');


async function readtareas(req, res){
    const tareas = await tareas_service.read();
    res.json(tareas);
}

module.exports = {
    readtareas
}
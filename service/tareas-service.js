const tareas_schema = require('../models/tareas');

async function readtareas(){
    let tareas = await tareas_schema.find({}).exec();
    return tareas;
}

module.exports = {
    readtareas
}
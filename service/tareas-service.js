const tareas_schema = require('../models/tareas');
/**
 * @returns {Promise<Tarea[]>}
 */
async function readtareas(){
    let tareas = await tareas_schema.find({}).exec();
    return tareas;
}

/**
 * @param {string} id
 * @returns {Promise<Tarea>}
 */
async function readOneTarea(id){
    let tarea = await tareas_schema.findById(id).exec();
    return tarea;
}

module.exports = {
    readtareas,
    readOneTarea
}
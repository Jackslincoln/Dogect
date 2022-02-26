const tareas_service = require('../service/tareas-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readtareas(req, res){
    const tareas = await tareas_service.readtareas();
    res.json(tareas);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function readOneTarea(req, res){
    const id = req.query.id;
    if(!id){
        res.status(400)
            .send('Bad request: tiene que enviar un id con los parametrosdel query');
            return;
    }

    try{
        const tarea = await tareas_service.readOneTarea(id);
        res.json(tarea);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readtareas,
    readOneTarea
}
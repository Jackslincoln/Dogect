const tareas_service = require('../service/tareas-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readtareas(req, res){
    try{
        const tareas = await tareas_service.readtareas();
        res.json(tareas);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readtareas
}
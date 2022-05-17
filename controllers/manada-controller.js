const manada_service = require('../service/manada-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readmanadas(req, res){
    const id = req.query.id;

    if(!id){
        res.status(400)
            .send('Bad request: tiene que enviar un id con los parámetros del query');
        return;
    }

    try{
        const manadas = await manada_service.readmanadas(id);
        res.json(manadas);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
    /*const manadas = await manada_service.readmanada(id);
    res.json(manadas); */
}

module.exports = {
    readmanadas
}
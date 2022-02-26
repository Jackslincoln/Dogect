const huesos_service = require('../service/huesos-service');
const {Request, Response} = require('express');
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function readhueso(req, res){
    const id = req.query.id;
    if(!id){
       res.status(400)
       .send('Bad Request: tiene que enviar un id con los paramteros del query') ;
    return;
    }

    try{
        const huesos = await huesos_service.readhueso(id);
        res.json(huesos);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readhueso
}
const imagenes_service = require('../service/imagenes-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readimage(req, res){
    const imagen = await imagenes_service.readimage();
    res.json(imagen);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function readOneImg(req, res){
    const id = req.query.id;
    if(!id){
        res.status(400)
            .send('Bad request: tiene que enviar un id con los parámetros del query');
        return;
    }

    try{
        const imagen = await imagenes_service.readOneImg(id);
        res.json(imagen);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readimage,
    readOneImg
}
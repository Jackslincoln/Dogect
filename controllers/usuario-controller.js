const user_service = require('../service/usuario-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function read(req, res){
    const users = await user_service.read();
    res.json(users);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function readOne(req, res){
    const id = req.query.id;
    if(!id){
        res.status(400)
            .send('Bad request: tiene que enviar un id con los parámetros del query');
        return;
    }

    try{
        const user = await user_service.readOne(id);
        res.json(user);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
    
}

module.exports = {
    read,
    readOne
};
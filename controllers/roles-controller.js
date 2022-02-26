const roles_service = require('../service/roles-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readroles(req, res){
    const roles = await roles_service.readroles();
    res.json(roles);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 async function readOneRole(req, res){
    const id = req.query.id;
    if(!id){
        res.status(400)
            .send('Bad request: tiene que enviar un id con los parámetros del query');
        return;
    }

    try{
        const rol = await roles_service.readOneRole(id);
        res.json(rol);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
    
}

module.exports = {
    readroles,
    readOneRole
}
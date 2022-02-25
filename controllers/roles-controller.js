const roles_service = require('../service/roles-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readroles(req, res){
    try{
        const roles = await roles_service.readroles();
        res.json(roles);
    } catch(error){
        res.status(500)
            .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readroles
}
const manada_service = require('../service/manada-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readmanada(req, res){
    const id = req.query.id;
    const manadas = await manada_service.readmanada(id);
    res.json(manadas);
}

module.exports = {
    readmanada
}
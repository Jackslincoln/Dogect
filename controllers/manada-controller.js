const manada_service = require('../service/manada-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readmanada(req, res){
    const manadas = await manada_service.readmanada();
    res.json(manadas);
}

module.exports = {
    readmanada
}
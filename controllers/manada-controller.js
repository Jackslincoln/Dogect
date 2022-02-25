const manada_service = require('../service/manada-service');

async function readmanada(req, res){
    const manadas = await manada_service.read();
    res.json(manadas);
}

module.exports = {
    readmanada
}
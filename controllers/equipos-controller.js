const equipos_service = require('../service/equipos-service');

async function readequipos(req, res){
    const equipos = await equipos_service.read();
    res.json(equipos);
}

module.exports = {
    readequipos
}

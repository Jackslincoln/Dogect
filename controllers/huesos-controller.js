const huesos_service = require('../service/huesos-service');

async function readhueso(req, res){
    const id = req.query.id;
    const huesos = await huesos_service.read(id);
    res.json(huesos);
}

module.exports = {
    readhueso
}
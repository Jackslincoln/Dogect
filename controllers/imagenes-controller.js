const imagenes_service = require('../service/imagenes-service');

async function readimage(req, res){
    const imagen = await imagenes_service.read();
    res.json(imagen);
}

module.exports = {
    readimage
}
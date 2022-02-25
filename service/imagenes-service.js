const imagenes_schema = require('../models/imagenes');

async function readimage(url){
    let image = await imagenes_schema.find({}).exec();
    return image;
}

module.exports = {
    readimage
}
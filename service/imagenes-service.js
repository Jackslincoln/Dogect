const { userInfo } = require('os');
const imagenes_schema = require('../models/imagenes');
/**
 * @returns {Promise<Image[]>}
 */
async function readimage(url){
    let image = await imagenes_schema.find({}).exec();
    return image;
}

/**
 * @param {string} id
 * @returns {Promise<Image>}
 */
async function readOneImg(id){
    let image = await imagenes_schema.findById(id).exec();
    return image;
}

module.exports = {
    readimage,
    readOneImg
}
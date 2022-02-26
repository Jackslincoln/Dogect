const manadas_schema = require('../models/manada');

/**
 * @param {string} id
 * @returns {Promise<Manada>}
 */
async function readmanada(id){
    let manada = await manadas_schema.findById(id).exec();
    return manada;
}

module.exports = {
    readmanada
}
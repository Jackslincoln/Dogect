const manadas_schema = require('../models/manada');

async function readmanada(correo){
    let manada = await manadas_schema.findById(correo).exec()
    return manada;
}


module.exports = {
    readmanada
}
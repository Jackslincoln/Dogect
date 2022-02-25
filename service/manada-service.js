const manadas_schema = require('../models/manada');

async function readmanada(correo){
    let manada = await manadas_schema.findById(correo).exec()
    return manada;
}
//readManadaByCreator
//readManadaByUser 
//readManadaById


module.exports = {
    readmanada
}
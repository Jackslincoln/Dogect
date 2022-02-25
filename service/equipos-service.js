const equipos_schema = require('../models/equipos');

async function readequipos(){
    let equipos = await equipos_schema.find({}).exec();
    return equipos;
}

module.exports = {
    readequipos
}
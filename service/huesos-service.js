const huesos_schema = require('../models/huesos');

async function readhueso(id){
    let huesos = await huesos_schema.findById(id).exec();
    return huesos;
}

module.exports = {
    readhueso
}
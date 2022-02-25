const notas_schema = require('../models/notas');

async function readnotes(){
    let notes = await notas_schema.findById({}).exec();
    return notes;
}

module.exports = {
    readnotes
}
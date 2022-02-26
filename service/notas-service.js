const notas_schema = require('../models/notas');
/**
 * @returns {Promise<Notes[]>}
 */
async function readnotes(){
    let notes = await notas_schema.find({}).exec();
    return notes;
}

/**
 * @param {string} id
 * @returns {Promise<Notes>}
 */
async function readOneNote(id){
    let note = await notas_schema.findById(id).exec();
    return note;
}

module.exports = {
    readnotes,
    readOneNote
}
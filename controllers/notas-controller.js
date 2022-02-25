const notes_service = require('../service/notas-service');

async function readnotes(req, res){
    const notes = await notes_service.read();
    res.json(notes);
}

module.exports = {
    readnotes
}
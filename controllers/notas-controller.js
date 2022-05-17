const notes_service = require('../service/notas-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readnotes(req, res){
    const notes = await notes_service.readnotes();
    res.json(notes);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function readOneNote(req, res){
    const id = req.query.id;
    if(!id){
        res.status(400)
            .status('Bad Request: tiene que enviar un id con los parametros del query');
        return;
    }

    try{
        const note = await notes_service.readOneNote(id);
        res.json(note);
    } catch(error){
        res.status(500)
            .send('Internal Server error: ocurrió un error');
    }
}

module.exports = {
    readnotes,
    readOneNote
}
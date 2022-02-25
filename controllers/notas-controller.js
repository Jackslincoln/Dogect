const notes_service = require('../service/notas-service');
const {Request, Response} = require('express');
/**
 * @param {Request} req
 * @param {Response} res
 */
async function readnotes(req, res){
    try{
        const notes = await notes_service.readnotes();
        res.json(notes);
    }catch(error){
    res.status(500)
        .send('Internal Server Error: ocurrió un error')
    }
}

module.exports = {
    readnotes
}
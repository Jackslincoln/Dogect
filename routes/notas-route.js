const express = require('express');
const NoteService = require('../service/notas-service');
const service = new NoteService;
const validatorHandler = require('./../middlewares/validator.handler');
const {createNoteDto, updateNoteDto, getNoteId} = require('../dtos/notes.dto');

const router = express.Router();

//GET ALL NOTES
router.get('/', (req, res, next) => {
  try {
    const {size} = req.query
    const notes = service.find(size || 10)
    res.json({
      'success': true,
      'message': 'Estos son las notas encontradas',
      'Data': notes
    });
  } catch(error) {
    next(error);
  }
});

//CREATE NOTE
router.post('/', validatorHandler(createNoteDto, 'body'), (req,res) => {
  const body = req.body;
  const note = service.create(body);
  res.json({
    'success': true,
    'message': 'Nota creada exitosamente',
    'data': note
  });
});

//GET NOTE BY ID
router.get('/:id', (req,res, next) => {
  try {
    const {id} = req.params;
    const note = service.findOne(id);
    res.json({
      'success': true,
      'message': 'Esta es la nota encontrado',
      'data': note
    });
  } catch(error) {
    next(error);
  }
});

//UPDATE NOTE
router.patch('/:id', validatorHandler(getNoteId, 'params'), validatorHandler(updateNoteDto, 'body'), (req,res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const {old, changed} = service.update(id, body);
    res.json({
      'success': true,
      'message': 'Se ha actualizado el siguiente registro.',
      'data': {
        "original": old,
        "modified": changed
      }
    });
  } catch(error) {
    next(error)
  }
});

//DELETE NOTE
router.delete('/:id', validatorHandler(getNoteId, 'params'), (req,res, next) => {
  try {
    const { id } = req.params;
    const note = service.delete(id);
    res.json({
      'success': true,
      'message': 'El siguiennte registro ha sido eliminado correctamente',
      'data': note
    });
  } catch(error) {
    next(error)
  }
});

module.exports = router;

// const notas_controller = require('../controllers/notas-controller');
// const app = express();

// app.get('/notas.readnotes', notas_controller.readnotes);
// app.get('/notas.readOneNote', notas_controller.readOneNote);

// module.exports = app;

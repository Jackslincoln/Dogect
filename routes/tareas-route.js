const express = require('express');
const tareaService = require('../service/tareas-service');
const service = new tareaService;
const validatorHandler = require('./../middlewares/validator.handler');
const {createTareaDto, updateTareaDto, getTareaId} = require('../dtos/tareas.dto');

const router = express.Router();
//const { tareas } = require('../config/schema-names');
//const tareas_controller = require('../controllers/tareas-controller');
//const app = express();

// app.get('/tareas.readtareas', tareas_controller.readtareas);
// app.get('/tareas.readOneTarea', tareas_controller.readOneTarea);

//GET TAREAS DE UN USUARIO
router.get('/', (req, res, next) => {
  try {
    const {size} = req.query
    const tareas = service.find(size || 10)
    res.json({
      'success': true,
      'message': 'Estas son las tareas encontradas',
      'Data': tareas
    });
  } catch(error) {
    next(error);
  }
});

//CREATE TAREA
router.post('/', validatorHandler(createTareaDto, 'body'), (req,res) => {
  const body = req.body;
  const tarea = service.create(body);
  res.json({
    'success': true,
    'message': 'Tarea creada exitosamente',
    'data': tarea
  });
});

//GET TAREA BY ID
router.get('/:id', (req,res, next) => {
  try {
    const {id} = req.params;
    const tarea = service.findOne(id);
    res.json({
      'success': true,
      'message': 'Esta es la tarea encontrada',
      'data': tarea
    });
  } catch(error) {
    next(error);
  }
});

//UPDATE TAREA
router.patch('/:id', validatorHandler(getTareaId, 'params'), validatorHandler(updateTareaDto, 'body'), (req,res, next) => {
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

//DELETE TAREA
router.delete('/:id', validatorHandler(getTareaId, 'params'), (req,res, next) => {
  try {
    const { id } = req.params;
    const tarea = service.delete(id);
    res.json({
      'success': true,
      'message': 'El siguiennte registro ha sido eliminado correctamente',
      'data': tarea
    });
  } catch(error) {
    next(error)
  }
});

module.exports = router;
//module.exports = app;

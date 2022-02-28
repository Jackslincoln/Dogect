//const huesos_controller = require('../controllers/huesos-controller');
const HuesoService = require('../service/usuario-service');
const express = require('express');
const service = new HuesoService;
const validatorHandler = require('./../middlewares/validator.handler');
//const app = express();



//app.get('/huesos.readhueso', huesos_controller.readhueso);

//CREAR HUESO
router.post('/', validatorHandler(createHuesoDto, 'body'), (req,res) => {
    const body = req.body;
    const hueso = service.create(body);
    res.json({
      'success': true,
      'message': 'Hueso asignado exitosamente',
      'data': hueso
    });
  });

router.delete('/:id', validatorHandler(getHuesoId, 'params'), (req,res, next) => {
    try {
      const { id } = req.params;
      const hueso = service.delete(id);
      res.json({
        'success': true,
        'message': 'Ha perdido un hueso',
        'data': hueso
      });
    } catch(error) {
      next(error)
    }
  });

module.exports = app;
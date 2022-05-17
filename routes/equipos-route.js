const EquipoService = require('../service/equipos-service');
const service = new EquipoService;
const validatorHandler = require('./../middlewares/validator.handler');


//const equipos_controller = require('../controllers/equipos-controller');
const express = require('express');
const router = express.Router();

//app.get('/equipos.readequipos', equipos_controller.readequipos);

//CREAR EQUIPO
router.post('/', validatorHandler(createTeamDto, 'body'), (req,res) => {
    const body = req.body;
    const team = service.createTeam(body);
    res.json({
      'success': true,
      'message': 'Equipo creado exitosamente',
      'data': team
    });
  });

//ELIMINAR EQUIPO
router.delete('/:id', validatorHandler(getTeamId, 'params'), (req,res, next) => {
    try {
      const { id } = req.params;
      const team = service.deleteTeam(id);
      res.json({
        'success': true,
        'message': 'El siguiente equipo ha sido eliminado correctamente',
        'data': team
      });
    } catch(error) {
      next(error)
    }
  });

module.exports = router;
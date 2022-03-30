const express = require('express');
const ManadaService = require('../service/manada-service');
const service = new ManadaService();
const EquiposService = require('../service/equipos-service');
const equiposService = new EquiposService();

const validatorHandler = require('../middlewares/validator.handler');
const { createManadaDto, updateManadaDto, getManadaDto, getManadasEquiposId } = require('../dtos/manadas.dto');

const router = express.Router();

//OBTENER TODAS LAS MANADAS -> (no estoy muy segura si esta la vamos a usar tho)
router.get('/', async (req, res, next) => {
  try {
    const { limit } = req.body;
    const filter = req.body;
    const data = await service.findDB(limit, filter);
    res.json({
      success: true,
      message: 'Listo',
      data: data
    });
  } catch (error) {
    next(error);
  }
});

//GET MANADA BY ID -> (esta tampoco se si la usaremos jsjsjs)
router.get('/:id', validatorHandler(getManadaDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.findOneDB(id);
    res.json({
      success: true,
      message: 'Listo',
      data: data
    });
  } catch (error) {
    next(error);
  }
});

//CREATE
router.post('/', validatorHandler(createManadaDto, 'body'), async (req, res, next) => {
  const body = req.body;
  try {
    const data = await service.createDB(body);
    res.json({
      success: true,
      message: 'Listo',
      data: data
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id',
  validatorHandler(getManadaDto, 'params'),
  validatorHandler(updateManadaDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await service.update(id, body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  });

//DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});

//OBTENER LOS EQUIPOS DE UNA MANADA --> este no jala pero no se por que
router.get('/:idManada/equipos/', validatorHandler(getManadasEquiposId, 'params'), async (req,res, next) => {
  try {
    const { idManada } = req.params;
    const manada = await service.findOneDB(idManada);
    const { equipos } = manada;
    const listOfEquipos = await equiposService.findDB(0, {
      _id: { $in: equipos }
    });
    res.json({
      'success': true,
      'message': 'Estos son los equipos encontrados:',
      'data': {
        'user': manada,
        'manadas': listOfEquipos
      }
    });
  } catch(error) {
    next(error);
  }
});


module.exports = router;

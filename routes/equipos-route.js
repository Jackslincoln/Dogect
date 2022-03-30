const express = require('express');
const EquipoService = require('../service/equipos-service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createEquipoDto, updateEquipoDto, getEquipoDto } = require('../dtos/equipos.dto');

const service = new EquipoService;
const router = express.Router();

//OBTENER TODOS LOS EQUIPOS
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

//GET EQUIPO BY ID -> (se podria usar para un buscador????)
router.get('/:id', validatorHandler(getEquipoDto, 'params'), async (req, res, next) => {
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

//CREAR EQUIPO
router.post('/', validatorHandler(createEquipoDto, 'body'), async (req, res, next) => {
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
  validatorHandler(getEquipoDto, 'params'),
  validatorHandler(updateEquipoDto, 'body'),
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

//ELIMINAR EQUIPO
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});

module.exports = router;

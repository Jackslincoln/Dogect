const express = require('express');
const UserService = require('../service/usuario-service');
const service = new UserService;
const validatorHandler = require('./../middlewares/validator.handler');
const {createUserDto, updateUserDto, getUserId} = require('../dtos/users.dto');

const router = express.Router();

//GET ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const {size} = req.query
    const filter = req.body;
    const users = await service.findDB(size || 10, filter);
    res.json({
      'success': true,
      'message': 'Estos son los usuarios encontrados',
      'Data': users
    });
  } catch(error) {
    next(error);
  }
});

//CREATE USER
router.post('/', validatorHandler(createUserDto, 'body'), async (req,res) => {
  const body = req.body;
  const user = await service.createDB(body);
  res.json({
    'success': true,
    'message': 'Usuario creado exitosamente',
    'data': user
  });
});

//GET USER BY ID
router.get('/:id', async (req,res, next) => {
  try {
    const {id} = req.params;
    const user = await service.findOneDB(id);
    res.json({
      'success': true,
      'message': 'Este es el usuario encontrado',
      'data': user
    });
  } catch(error) {
    next(error);
  }

});

//UPDATE USUARIO
router.patch('/:id', validatorHandler(getUserId, 'params'), validatorHandler(updateUserDto, 'body'), async (req,res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const {original, actualizado} = await service.updateDB(id, body);
    res.json({
      'success': true,
      'message': 'Se ha actualizado el siguiente registro.',
      'data': {
        "original": original,
        "modified": actualizado
      }
    });
  } catch(error) {
    next(error)
  }
});

//DELETE USUARIO
router.delete('/:id', validatorHandler(getUserId, 'params'), async (req,res, next) => {
  try {
    const { id } = req.params;
    const user = await service.deleteDB(id);
    res.json({
      'success': true,
      'message': 'El siguiennte registro ha sido eliminado correctamente',
      'data': user
    });
  } catch(error) {
    next(error)
  }
});

module.exports = router;
//module.exports = app;

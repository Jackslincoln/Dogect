const express = require('express');
const UserService = require('../service/usuario-service');
const service = new UserService;
const validatorHandler = require('./../middlewares/validator.handler');
const {createUserDto, updateUserDto, getUserId} = require('../dtos/users.dto');

const router = express.Router();
//const user_controller = require('../controllers/usuario-controller');
//const app = express();

// app.get('/users.read', user_controller.read);
// app.get('/users.readonne', user_controller.readOne);

//GET ALL USERS
router.get('/', (req, res, next) => {
  try {
    const {size} = req.query
    const users = service.find(size || 10)
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
router.post('/', validatorHandler(createUserDto, 'body'), (req,res) => {
  const body = req.body;
  const user = service.create(body);
  res.json({
    'success': true,
    'message': 'Usuario creado exitosamente',
    'data': user
  });
});

//GET USER BY ID
router.get('/:id', (req,res, next) => {
  try {
    const {id} = req.params;
    const user = service.findOne(id);
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
router.patch('/:id', validatorHandler(getUserId, 'params'), validatorHandler(updateUserDto, 'body'), (req,res, next) => {
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

//DELETE USUARIO
router.delete('/:id', validatorHandler(getUserId, 'params'), (req,res, next) => {
  try {
    const { id } = req.params;
    const user = service.delete(id);
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
